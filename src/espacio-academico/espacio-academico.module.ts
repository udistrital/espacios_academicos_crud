import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EspacioAcademicoController } from './espacio-academico.controller';
import { EspacioAcademicoService } from './espacio-academico.service';
import { Espacio_academico, Espacio_academicoSchema } from './schemas/espacio_academico.schema';
import { Estado_aprobacion, Estado_aprobacionSchema } from 'src/estado-aprobacion/schemas/estado_aprobacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Espacio_academico.name, schema: Espacio_academicoSchema},
      {name: Estado_aprobacion.name, schema: Estado_aprobacionSchema}
    ])
  ],
  controllers: [EspacioAcademicoController],
  providers: [EspacioAcademicoService],
  exports: [EspacioAcademicoService]
})
export class EspacioAcademicoModule {}
