import { Test, TestingModule } from '@nestjs/testing';
import { EspacioAcademicoEstudiantesService } from './espacio-academico-estudiantes.service';

describe('EspacioAcademicoEstudiantesService', () => {
  let service: EspacioAcademicoEstudiantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspacioAcademicoEstudiantesService],
    }).compile();

    service = module.get<EspacioAcademicoEstudiantesService>(EspacioAcademicoEstudiantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
