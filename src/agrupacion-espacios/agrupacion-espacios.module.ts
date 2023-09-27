import { Module } from '@nestjs/common';
import { AgrupacionEspaciosController } from './agrupacion-espacios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Agrupacion_espacios, Agrupacion_espaciosSchema } from './schema/agrupacion-espacios.schema';
import { AgrupacionEspaciosService } from './agrupacion-espacios.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Agrupacion_espacios.name, schema: Agrupacion_espaciosSchema}
    ])
  ],
  controllers: [AgrupacionEspaciosController],
  providers: [AgrupacionEspaciosService],
  exports: [AgrupacionEspaciosService]
})
export class AgrupacionEspaciosModule {}
