import { Test, TestingModule } from '@nestjs/testing';
import { AgrupacionEspaciosController } from './agrupacion-espacios.controller';

describe('AgrupacionEspaciosController', () => {
  let controller: AgrupacionEspaciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgrupacionEspaciosController],
    }).compile();

    controller = module.get<AgrupacionEspaciosController>(AgrupacionEspaciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
