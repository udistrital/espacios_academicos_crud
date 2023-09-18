import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspacioAcademicoModule } from './espacio-academico/espacio-academico.module';
import { environment } from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { EspacioAcademicoEstudiantesModule } from './espacio-academico-estudiantes/espacio-academico-estudiantes.module';
import { EstadoAprobacionModule } from './estado-aprobacion/estado-aprobacion.module';
import { EspacioAcademicoDocentesModule } from './espacio-academico-docentes/espacio-academico-docentes.module';
import { AgrupacionEspaciosService } from './agrupacion-espacios/agrupacion-espacios.service';
import { AgrupacionEspaciosModule } from './agrupacion-espacios/agrupacion-espacios.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+
    `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`, {
      useFindAndModify: false
    }),
    EspacioAcademicoModule,
    EspacioAcademicoEstudiantesModule,
    EstadoAprobacionModule,
    EspacioAcademicoDocentesModule,
    AgrupacionEspaciosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
