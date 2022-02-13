"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspacioAcademicoService = void 0;
const common_1 = require("@nestjs/common");
const espacio_academico_schema_1 = require("./schemas/espacio_academico.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const filters_service_1 = require("../filters/filters.service");
let EspacioAcademicoService = class EspacioAcademicoService {
    constructor(espacio_academicoModel) {
        this.espacio_academicoModel = espacio_academicoModel;
    }
    async post(espacio_academicoDto) {
        try {
            const espacio_academico = new this.espacio_academicoModel(espacio_academicoDto);
            espacio_academico.fecha_creacion = new Date();
            espacio_academico.fecha_modificacion = new Date();
            return await espacio_academico.save();
        }
        catch (error) {
            return null;
        }
    }
    async getAll(filterDto) {
        try {
            const filtersService = new filters_service_1.FiltersService(filterDto);
            return await this.espacio_academicoModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }
    async getById(id) {
        try {
            return await this.espacio_academicoModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
        ;
    }
    async put(id, espacio_academicoDto) {
        try {
            espacio_academicoDto.fecha_modificacion = new Date();
            await this.espacio_academicoModel.findByIdAndUpdate(id, espacio_academicoDto, { new: true }).exec();
            return await this.espacio_academicoModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
        ;
    }
    async delete(id) {
        try {
            return await this.espacio_academicoModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
        ;
    }
};
EspacioAcademicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(espacio_academico_schema_1.Espacio_academico.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EspacioAcademicoService);
exports.EspacioAcademicoService = EspacioAcademicoService;
//# sourceMappingURL=espacio-academico.service.js.map