import { Module } from '@nestjs/common';
import { EstadoAprobacionController } from './estado-aprobacion.controller';
import { EstadoAprobacionService } from './estado-aprobacion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Estado_aprobacion, Estado_aprobacionSchema } from './schemas/estado_aprobacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Estado_aprobacion.name, schema: Estado_aprobacionSchema},
    ])
  ],
  controllers: [EstadoAprobacionController],
  providers: [EstadoAprobacionService],
  exports: [EstadoAprobacionService]
})
export class EstadoAprobacionModule {}
