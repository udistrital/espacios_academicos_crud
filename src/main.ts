import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/configuration';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('espacios_academicos_crud')
    .setDescription('API CRUD para la gestion de espacios académicos en el registro de notas')
    .setVersion('1.0')
    .addTag('espacio_academico')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync("./swagger.json", JSON.stringify(document, null, 4));
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(environment.HTTP_PORT,10) || 8080);

}
bootstrap();
