import { Injectable } from '@nestjs/common';

import { Espacio_academico } from './schemas/espacio_academico.schema';
import { Espacio_academicoDto } from './dto/espacio_academico.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";
import { Estado_aprobacion } from 'src/estado-aprobacion/schemas/estado_aprobacion.schema';

@Injectable()
export class EspacioAcademicoService {
    constructor (
        @InjectModel(Espacio_academico.name) private readonly espacio_academicoModel: Model<Espacio_academico>,
        @InjectModel(Estado_aprobacion.name) private readonly estado_aprobacionModel: Model<Estado_aprobacion>
    ) {}
    
    async post(espacio_academicoDto: Espacio_academicoDto): Promise<Espacio_academico>{
        try{
            const espacio_academico = new this.espacio_academicoModel(espacio_academicoDto);
            if(espacio_academico.espacio_academico_padre){
                await this.espacio_academicoModel.findById(espacio_academico.espacio_academico_padre).exec();
            }
            if(espacio_academico.estado_aprobacion_id){
                await this.estado_aprobacionModel.findById(espacio_academico.estado_aprobacion_id).exec();
            }
            espacio_academico.fecha_creacion = new Date();
            espacio_academico.fecha_modificacion = espacio_academico.fecha_creacion;
            return await espacio_academico.save();
        }
        catch(error){
            return null;
        }
    }
    
    async getAll(filterDto: FilterDto): Promise<Espacio_academico[]>{
        try{
            const filtersService = new FiltersService(filterDto);
            return await this.espacio_academicoModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
            .sort(filtersService.getSortBy()).exec();
        }
        catch(error){
            return null;
        }
    }

    async getById(id: string): Promise<Espacio_academico>{
        try{
            var espacio_academico = await this.espacio_academicoModel.findById(id).exec();
            if(espacio_academico.espacio_academico_padre != undefined && espacio_academico.espacio_academico_padre != ""){
                var espacio_academico_padre = await this.espacio_academicoModel.findById(espacio_academico.espacio_academico_padre).exec();
                espacio_academico.espacio_academico_padre = espacio_academico_padre;
            }
            if(espacio_academico.estado_aprobacion_id){
                const estado_aprobacion = await this.estado_aprobacionModel.findById(espacio_academico.estado_aprobacion_id).exec();
                espacio_academico.estado_aprobacion_id = estado_aprobacion;
            }
            return espacio_academico
        }
        catch(error){
            return null;
        };
    }

    async put(id: string, espacio_academicoDto: Espacio_academicoDto): Promise<Espacio_academico>{
        try{
            if(espacio_academicoDto.espacio_academico_padre != undefined){
                await this.espacio_academicoModel.findById(espacio_academicoDto.espacio_academico_padre).exec();
            }
            if(espacio_academicoDto.estado_aprobacion_id != undefined){
                await this.estado_aprobacionModel.findById(espacio_academicoDto.estado_aprobacion_id).exec();
            }
            await this.espacio_academicoModel.findById(id).then(espacio_academico => {
                espacio_academicoDto.fecha_creacion = espacio_academico.fecha_creacion;
                espacio_academicoDto.fecha_modificacion = new Date();
            })
            await this.espacio_academicoModel.findByIdAndUpdate(id, espacio_academicoDto, {new: true}).exec();
            return await this.espacio_academicoModel.findById(id).exec();
        }
        catch(error){
            return null;
        };
    }

    async delete(id: string): Promise<any>{
        try{
            return await this.espacio_academicoModel.findByIdAndRemove(id).exec();
        }
        catch(error){
            return null;
        };
    }
    
}
