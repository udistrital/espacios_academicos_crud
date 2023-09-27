import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Espacio_academico_docentes } from './schema/espacio-academico-docentes.schema';
import { Model } from 'mongoose';
import { Espacio_academico } from 'src/espacio-academico/schemas/espacio_academico.schema';
import { Espacio_academico_docentesDto } from './dto/espacio-academico-docentes.dto';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { FiltersService } from 'src/filters/filters.service';

@Injectable()
export class EspacioAcademicoDocentesService {
  constructor(
    @InjectModel(Espacio_academico_docentes.name)
    private readonly espacio_academico_docentesModel: Model<Espacio_academico_docentes>,
    @InjectModel(Espacio_academico.name)
    private readonly espacio_academicoModel: Model<Espacio_academico>,
  ) {}

  async post(espacio_academico_docentesDto: Espacio_academico_docentesDto): Promise<Espacio_academico_docentes> {
    try {
        const espacio_academico_docentes = new this.espacio_academico_docentesModel(espacio_academico_docentesDto);
        await this.espacio_academicoModel.findById(espacio_academico_docentes.espacio_academico_id); // check if espacio_academico exists
        espacio_academico_docentes.fecha_creacion = new Date();
        espacio_academico_docentes.fecha_modificacion = espacio_academico_docentes.fecha_creacion;
        return await espacio_academico_docentes.save();
    } catch (error) {
        return null;
    }
  }

  async getAll(filterDto: FilterDto): Promise<Espacio_academico_docentes[]> {
    try {
        const filtersService = new FiltersService(filterDto);
        return await this.espacio_academico_docentesModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
        .sort(filtersService.getSortBy()).exec();
    } catch (error) {
        return null;
    }
  }

  async getById(id: string): Promise<Espacio_academico_docentes> {
    try {
        return await this.espacio_academico_docentesModel.findById(id).exec();
    } catch (error) {
        return null;
    }
  }

  async put(id: string, espacio_academico_docentesDto: Espacio_academico_docentesDto): Promise<Espacio_academico_docentes> {
    try {
        if(espacio_academico_docentesDto.espacio_academico_id != undefined) {
            await this.espacio_academicoModel.findById(espacio_academico_docentesDto.espacio_academico_id);
        }
        await this.espacio_academico_docentesModel.findById(id).then(espacio_academico_docentes => {
            espacio_academico_docentesDto.fecha_creacion = espacio_academico_docentes.fecha_creacion;
            espacio_academico_docentesDto.fecha_modificacion = new Date();
        })
        await this.espacio_academico_docentesModel.findByIdAndUpdate(id, espacio_academico_docentesDto, {new: true}).exec();
        return await this.espacio_academico_docentesModel.findById(id).exec();
    } catch (error) {
        return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
        return await this.espacio_academico_docentesModel.findByIdAndRemove(id).exec();
    } catch (error) {
        return null;
    }
  }

}
