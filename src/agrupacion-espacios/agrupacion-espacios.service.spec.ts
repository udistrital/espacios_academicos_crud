import { Test, TestingModule } from '@nestjs/testing';
import { AgrupacionEspaciosService } from './agrupacion-espacios.service';

describe('AgrupacionEspaciosService', () => {
  let service: AgrupacionEspaciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgrupacionEspaciosService],
    }).compile();

    service = module.get<AgrupacionEspaciosService>(AgrupacionEspaciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
