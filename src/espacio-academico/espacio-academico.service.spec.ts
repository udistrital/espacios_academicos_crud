import { Test, TestingModule } from '@nestjs/testing';
import { EspacioAcademicoService } from './espacio-academico.service';

describe('EspacioAcademicoService', () => {
  let service: EspacioAcademicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspacioAcademicoService],
    }).compile();

    service = module.get<EspacioAcademicoService>(EspacioAcademicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
