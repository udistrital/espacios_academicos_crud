import { Test, TestingModule } from '@nestjs/testing';
import { EspacioAcademicoDocentesService } from './espacio-academico-docentes.service';

describe('EspacioAcademicoDocentesService', () => {
  let service: EspacioAcademicoDocentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspacioAcademicoDocentesService],
    }).compile();

    service = module.get<EspacioAcademicoDocentesService>(EspacioAcademicoDocentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
