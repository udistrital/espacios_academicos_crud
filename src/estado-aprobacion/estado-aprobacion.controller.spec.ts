import { Test, TestingModule } from '@nestjs/testing';
import { EstadoAprobacionController } from './estado-aprobacion.controller';

describe('EstadoAprobacionController', () => {
  let controller: EstadoAprobacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoAprobacionController],
    }).compile();

    controller = module.get<EstadoAprobacionController>(EstadoAprobacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
