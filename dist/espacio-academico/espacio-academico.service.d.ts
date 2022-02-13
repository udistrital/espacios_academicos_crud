import { Espacio_academico } from './schemas/espacio_academico.schema';
import { Espacio_academicoDto } from './dto/espacio_acadmico.dto';
import { Model } from 'mongoose';
import { FilterDto } from "../filters/dto/filter.dto";
export declare class EspacioAcademicoService {
    private readonly espacio_academicoModel;
    constructor(espacio_academicoModel: Model<Espacio_academico>);
    post(espacio_academicoDto: Espacio_academicoDto): Promise<Espacio_academico>;
    getAll(filterDto: FilterDto): Promise<Espacio_academico[]>;
    getById(id: string): Promise<Espacio_academico>;
    put(id: string, espacio_academicoDto: Espacio_academicoDto): Promise<Espacio_academico>;
    delete(id: string): Promise<any>;
}
