import { Module } from '@nestjs/common';
import { EspacioAcademicoDocentesController } from './espacio-academico-docentes.controller';
import { EspacioAcademicoDocentesService } from './espacio-academico-docentes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Espacio_academico_docentes, Espacio_academico_docentesSchema } from './schema/espacio-academico-docentes.schema';
import { Espacio_academico, Espacio_academicoSchema } from 'src/espacio-academico/schemas/espacio_academico.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Espacio_academico_docentes.name, schema: Espacio_academico_docentesSchema},
      {name: Espacio_academico.name, schema: Espacio_academicoSchema}
    ])
  ],
  controllers: [EspacioAcademicoDocentesController],
  providers: [EspacioAcademicoDocentesService],
  exports: [EspacioAcademicoDocentesService]
})
export class EspacioAcademicoDocentesModule {}
