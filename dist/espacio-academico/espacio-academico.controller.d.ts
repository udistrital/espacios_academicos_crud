import { Espacio_academicoDto } from './dto/espacio_acadmico.dto';
import { EspacioAcademicoService } from './espacio-academico.service';
import { FilterDto } from "../filters/dto/filter.dto";
export declare class EspacioAcademicoController {
    private espacioAcademicoService;
    constructor(espacioAcademicoService: EspacioAcademicoService);
    post(res: any, espacio_academicoDto: Espacio_academicoDto): Promise<void>;
    getAll(res: any, filterDto: FilterDto): Promise<void>;
    getById(res: any, id: string): Promise<void>;
    put(res: any, id: string, espacio_academicoDto: Espacio_academicoDto): Promise<any>;
    delete(res: any, id: string): Promise<any>;
}
