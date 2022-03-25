import { Test, TestingModule } from '@nestjs/testing';
import { EspacioAcademicoEstudiantesController } from './espacio-academico-estudiantes.controller';

describe('EspacioAcademicoEstudiantesController', () => {
  let controller: EspacioAcademicoEstudiantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspacioAcademicoEstudiantesController],
    }).compile();

    controller = module.get<EspacioAcademicoEstudiantesController>(EspacioAcademicoEstudiantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
