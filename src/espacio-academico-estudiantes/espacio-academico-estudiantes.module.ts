import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Espacio_academico, Espacio_academicoSchema } from 'src/espacio-academico/schemas/espacio_academico.schema';
import { EspacioAcademicoEstudiantesController } from './espacio-academico-estudiantes.controller';
import { EspacioAcademicoEstudiantesService } from './espacio-academico-estudiantes.service';
import { Espacio_academico_estudiantes, Espacio_academico_estudiantesSchema } from "./schemas/espacio_academico_estudiantes.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Espacio_academico_estudiantes.name, schema: Espacio_academico_estudiantesSchema},
    {name: Espacio_academico.name, schema: Espacio_academicoSchema}])
  ],
  controllers: [EspacioAcademicoEstudiantesController],
  providers: [EspacioAcademicoEstudiantesService],
  exports: [EspacioAcademicoEstudiantesService]
})
export class EspacioAcademicoEstudiantesModule {}
