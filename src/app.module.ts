import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspacioAcademicoModule } from './espacio-academico/espacio-academico.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EspacioAcademicoEstudiantesModule } from './espacio-academico-estudiantes/espacio-academico-estudiantes.module';
import { EstadoAprobacionModule } from './estado-aprobacion/estado-aprobacion.module';
import { AgrupacionEspaciosModule } from './agrupacion-espacios/agrupacion-espacios.module';
import { ParameterStoreModule } from './config/paramter_store.module';

@Module({
  imports: [
    ParameterStoreModule,
    // forRootAsync: la URI se construye al momento de conectar, cuando
    // main.ts ya cargó las credenciales desde SSM en process.env.
    MongooseModule.forRootAsync({
      useFactory: () => {
        const user = encodeURIComponent(process.env.ESPACIOS_ACADEMICOS_CRUD_USER ?? '');
        const pass = encodeURIComponent(process.env.ESPACIOS_ACADEMICOS_CRUD_PASS ?? '');
        const host = process.env.ESPACIOS_ACADEMICOS_CRUD_HOST;
        const port = process.env.ESPACIOS_ACADEMICOS_CRUD_PORT;
        const db = process.env.ESPACIOS_ACADEMICOS_CRUD_DB;
        const authDb = process.env.ESPACIOS_ACADEMICOS_CRUD_AUTH_DB;

        return {
          uri: `mongodb://${user}:${pass}@${host}:${port}/${db}?authSource=${authDb}`,
          useFindAndModify: false,
        };
      },
    }),
    EspacioAcademicoModule,
    EspacioAcademicoEstudiantesModule,
    EstadoAprobacionModule,
    AgrupacionEspaciosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
