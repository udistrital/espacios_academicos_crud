import { Test, TestingModule } from '@nestjs/testing';
import { EspacioAcademicoController } from './espacio-academico.controller';

describe('EspacioAcademicoController', () => {
  let controller: EspacioAcademicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspacioAcademicoController],
    }).compile();

    controller = module.get<EspacioAcademicoController>(EspacioAcademicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
