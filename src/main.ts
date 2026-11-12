import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/configuration';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';     // related security headers 
import { ParameterStoreService } from './config/parameter_store.service';
import * as fs from 'fs';

// Carga las credenciales de la BD desde AWS SSM ANTES de crear la app,
// porque NestFactory.create inicializa la conexión a Mongo.
async function loadSsmParameters() {
  if (environment.RUNMODE === 'dev') {
    return;
  }

  const parameterStoreService = new ParameterStoreService();
  // TEMPORAL: prefijo quemado en preprod para el ambiente de pruebas.
  // Volver a process.env.PARAMETER_STORE cuando la task definition lo defina.
  const prefix = 'preprod';
  const userParam = `/${prefix}/espacios_academicos_crud/db/username`;
  const passParam = `/${prefix}/espacios_academicos_crud/db/password`;

  console.log(
    `Cargando parámetros SSM (región ${process.env.AWS_REGION || 'us-east-1'}): ${userParam}, ${passParam}`,
  );

  let current = userParam;
  try {
    process.env.ESPACIOS_ACADEMICOS_CRUD_USER =
      await parameterStoreService.getParameter(userParam);

    current = passParam;
    process.env.ESPACIOS_ACADEMICOS_CRUD_PASS =
      await parameterStoreService.getParameter(passParam);

    console.log('Parámetros cargados desde AWS SSM');
  } catch (error: any) {
    console.error(
      `Error cargando el parámetro "${current}" desde SSM: ${error?.name ?? ''} ${error?.message ?? ''}`,
    );
    process.exit(1);
  }
}

async function bootstrap() {
  await loadSsmParameters();

  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.enableCors({
    origin: (origin, callback) => {

      if (environment.RUNMODE === 'dev' || !environment.RUNMODE) {
        return callback(null, true);
      }

      const allowedOrigins = [/\.udistrital\.edu\.co$/];
      if (!origin || allowedOrigins.some(pattern =>
        pattern instanceof RegExp
          ? pattern.test(origin)
          : origin === pattern
      )) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'), false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'User-Agent',
      'X-Amzn-Trace-Id',
    ],
    exposedHeaders: ['Content-Length'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('espacios_academicos_crud')
    .setDescription('API CRUD para la gestion de espacios académicos en el registro de notas')
    .setVersion('1.0')
    .addTag('espacio_academico')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync("./swagger.json", JSON.stringify(document, null, 4));
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(environment.HTTP_PORT, 10) || 8080);

}
bootstrap();
