import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Estado_aprobacion } from './schemas/estado_aprobacion.schema';
import { Model } from 'mongoose';
import { Estado_aprobacionDto } from './dto/estado_aprobacion.dto';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { FiltersService } from 'src/filters/filters.service';

@Injectable()
export class EstadoAprobacionService {
    constructor(
        @InjectModel(Estado_aprobacion.name) private readonly estado_aprobacionModel: Model<Estado_aprobacion>,
    ) {}

    async post(estado_aprobacionDto: Estado_aprobacionDto): Promise<Estado_aprobacion> {
        try {
            const estado_aprobacion = new this.estado_aprobacionModel(estado_aprobacionDto);
            estado_aprobacion.fecha_creacion = new Date();
            estado_aprobacion.fecha_modificacion = estado_aprobacion.fecha_creacion;
            return await estado_aprobacion.save();
        } catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<Estado_aprobacion[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.estado_aprobacionModel.find(
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

    async getById(id: string): Promise<Estado_aprobacion> {
        try {
            return await this.estado_aprobacionModel.findById(id).exec();
        } catch (error) {
            return null;
        }
    }

    async put(id: string, estado_aprobacionDto: Estado_aprobacionDto): Promise<Estado_aprobacion> {
        try {
            await this.estado_aprobacionModel.findById(id).then(estado_aprobacion => {
                estado_aprobacionDto.fecha_creacion = estado_aprobacion.fecha_creacion;
                estado_aprobacionDto.fecha_modificacion = new Date();
            });
            await this.estado_aprobacionModel.findByIdAndUpdate(id, estado_aprobacionDto, {new: true}).exec();
            return await this.estado_aprobacionModel.findById(id).exec();
        } catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.estado_aprobacionModel.findByIdAndRemove(id).exec();
        } catch (error) {
            return null;
        }
    }
}
