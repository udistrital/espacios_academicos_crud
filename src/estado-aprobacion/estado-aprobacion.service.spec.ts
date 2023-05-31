import { Test, TestingModule } from '@nestjs/testing';
import { EstadoAprobacionService } from './estado-aprobacion.service';

describe('EstadoAprobacionService', () => {
  let service: EstadoAprobacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoAprobacionService],
    }).compile();

    service = module.get<EstadoAprobacionService>(EstadoAprobacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
