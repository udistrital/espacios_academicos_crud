import { Test, TestingModule } from '@nestjs/testing';
import { EspacioAcademicoDocentesController } from './espacio-academico-docentes.controller';

describe('EspacioAcademicoDocentesController', () => {
  let controller: EspacioAcademicoDocentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspacioAcademicoDocentesController],
    }).compile();

    controller = module.get<EspacioAcademicoDocentesController>(EspacioAcademicoDocentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
