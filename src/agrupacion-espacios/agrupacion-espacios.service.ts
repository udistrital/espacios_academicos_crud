import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Agrupacion_espacios } from './schema/agrupacion-espacios.schema';
import { Model } from 'mongoose';
import { Agrupacion_espaciosDto } from './dto/agrupacion-espacios.dto';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { FiltersService } from 'src/filters/filters.service';

@Injectable()
export class AgrupacionEspaciosService {
    constructor(
        @InjectModel(Agrupacion_espacios.name)
        private readonly agrupacion_espaciosModel: Model<Agrupacion_espacios>,
    ) {}

    async post(agrupacion_espaciosDto: Agrupacion_espaciosDto): Promise<Agrupacion_espacios> {
        try {
            const agrupacion_espacios = new this.agrupacion_espaciosModel(agrupacion_espaciosDto);
            agrupacion_espacios.fecha_creacion = new Date();
            agrupacion_espacios.fecha_modificacion = agrupacion_espacios.fecha_creacion;
            return await agrupacion_espacios.save();
        } catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<Agrupacion_espacios[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.agrupacion_espaciosModel.find(
                filtersService.getQuery(),
                filtersService.getFields(),
                filtersService.getLimitAndOffset()
            ).sort(
                filtersService.getSortBy()
            ).exec();
        } catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<Agrupacion_espacios> {
        try {
            return await this.agrupacion_espaciosModel.findById(id).exec();
        } catch (error) {
            return null;
        }
    }

    async put(id: string, agrupacion_espaciosDto: Agrupacion_espaciosDto): Promise<Agrupacion_espacios> {
        try {
            await this.agrupacion_espaciosModel.findById(id).then(agrupacion_espacios => {
                agrupacion_espaciosDto.fecha_creacion = agrupacion_espacios.fecha_creacion;
                agrupacion_espaciosDto.fecha_modificacion = new Date();
            });
            await this.agrupacion_espaciosModel.findByIdAndUpdate(id, agrupacion_espaciosDto, {new: true}).exec();
            return await this.agrupacion_espaciosModel.findById(id).exec();
        } catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.agrupacion_espaciosModel.findByIdAndRemove(id).exec();
        } catch (error) {
            return null;
        }
    }

}
