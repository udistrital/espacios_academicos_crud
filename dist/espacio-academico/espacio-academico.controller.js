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
exports.EspacioAcademicoController = void 0;
const common_1 = require("@nestjs/common");
const espacio_acadmico_dto_1 = require("./dto/espacio_acadmico.dto");
const espacio_academico_service_1 = require("./espacio-academico.service");
const filter_dto_1 = require("../filters/dto/filter.dto");
let EspacioAcademicoController = class EspacioAcademicoController {
    constructor(espacioAcademicoService) {
        this.espacioAcademicoService = espacioAcademicoService;
    }
    async post(res, espacio_academicoDto) {
        const espacio_academico = await this.espacioAcademicoService.post(espacio_academicoDto);
        if (!espacio_academico) {
            throw new common_1.HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Post: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        res.status(common_1.HttpStatus.CREATED).json({
            Success: true,
            Status: "201",
            Message: "Registration successful",
            Data: espacio_academico
        });
    }
    async getAll(res, filterDto) {
        const espacio_academico = await this.espacioAcademicoService.getAll(filterDto);
        if (!espacio_academico) {
            throw new common_1.HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetAll: The request contains an incorrect parameter or no record exist",
                Data: null
            }, common_1.HttpStatus.NOT_FOUND);
        }
        res.status(common_1.HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Request successful",
            Data: espacio_academico
        });
    }
    async getById(res, id) {
        const espacio_academico = await this.espacioAcademicoService.getById(id);
        if (!espacio_academico) {
            throw new common_1.HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetOne: The request contains an incorrect parameter or no record exist",
                Data: null
            }, common_1.HttpStatus.NOT_FOUND);
        }
        res.status(common_1.HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Request successful",
            Data: espacio_academico
        });
    }
    async put(res, id, espacio_academicoDto) {
        const espacio_academico = await this.espacioAcademicoService.put(id, espacio_academicoDto);
        if (!espacio_academico) {
            throw new common_1.HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Put: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return res.status(common_1.HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Update successful",
            Data: espacio_academico
        });
    }
    async delete(res, id) {
        const espacio_academico = await this.espacioAcademicoService.delete(id);
        if (!espacio_academico) {
            throw new common_1.HttpException({
                Success: false,
                Status: "404",
                Message: "Error service Put: Request contains incorrect parameter",
                Data: null
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return res.status(common_1.HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Delete successful",
            Data: {
                _id: id
            }
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, espacio_acadmico_dto_1.Espacio_academicoDto]),
    __metadata("design:returntype", Promise)
], EspacioAcademicoController.prototype, "post", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], EspacioAcademicoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EspacioAcademicoController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, espacio_acadmico_dto_1.Espacio_academicoDto]),
    __metadata("design:returntype", Promise)
], EspacioAcademicoController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EspacioAcademicoController.prototype, "delete", null);
EspacioAcademicoController = __decorate([
    (0, common_1.Controller)('espacio-academico'),
    __metadata("design:paramtypes", [espacio_academico_service_1.EspacioAcademicoService])
], EspacioAcademicoController);
exports.EspacioAcademicoController = EspacioAcademicoController;
//# sourceMappingURL=espacio-academico.controller.js.map