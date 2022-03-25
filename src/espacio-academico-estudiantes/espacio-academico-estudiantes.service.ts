import { Injectable } from '@nestjs/common';

import { Espacio_academico_estudiantes } from "./schemas/espacio_academico_estudiantes.schema";
import { Espacio_academico_estudiantesDto } from "./dto/espacio_academico_estudiantes.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class EspacioAcademicoEstudiantesService {
    constructor(@InjectModel(Espacio_academico_estudiantes.name) private readonly espacio_academico_estudiantesModel: Model<Espacio_academico_estudiantes>){}

    async post(espacio_academicoDto: Espacio_academico_estudiantesDto): Promise<Espacio_academico_estudiantes>{
        try{
            const espacio_academico_estudiantes = new this.espacio_academico_estudiantesModel(espacio_academicoDto);
            espacio_academico_estudiantes.fecha_creacion = new Date();
            espacio_academico_estudiantes.fecha_modificacion = new Date();
            return await espacio_academico_estudiantes.save();
        }
        catch(error){
            return null;
        }
    }
    
    async getAll(filterDto: FilterDto): Promise<Espacio_academico_estudiantes[]>{
        try{
            const filtersService = new FiltersService(filterDto);
            return await this.espacio_academico_estudiantesModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
            .sort(filtersService.getSortBy()).exec();
        }
        catch(error){
            return null;
        }
    }

    async getById(id: string): Promise<Espacio_academico_estudiantes>{
        try{
            return await this.espacio_academico_estudiantesModel.findById(id).exec();
        }
        catch(error){
            return null;
        };
    }

    async put(id: string, espacio_academico_estudiantesDto: Espacio_academico_estudiantesDto): Promise<Espacio_academico_estudiantes>{
        try{
            espacio_academico_estudiantesDto.fecha_modificacion = new Date();
            await this.espacio_academico_estudiantesModel.findByIdAndUpdate(id, espacio_academico_estudiantesDto, {new: true}).exec();
            return await this.espacio_academico_estudiantesModel.findById(id).exec();
        }
        catch(error){
            return null;
        };
    }

    async delete(id: string): Promise<any>{
        try{
            return await this.espacio_academico_estudiantesModel.findByIdAndRemove(id).exec();
        }
        catch(error){
            return null;
        };
    }
    
}
