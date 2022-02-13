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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espacio_academicoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class Espacio_academicoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "codigo_abreviacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "codigo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "plan_estudio_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Espacio_academicoDto.prototype, "creditos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], Espacio_academicoDto.prototype, "distribucion_horas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "clasificacion_espacio_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], Espacio_academicoDto.prototype, "espacios_requeridos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "grupo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Espacio_academicoDto.prototype, "inscritos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "docente_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "horario_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Espacio_academicoDto.prototype, "espacio_academico_padre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Espacio_academicoDto.prototype, "activo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Espacio_academicoDto.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Espacio_academicoDto.prototype, "fecha_modificacion", void 0);
exports.Espacio_academicoDto = Espacio_academicoDto;
//# sourceMappingURL=espacio_acadmico.dto.js.map