"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspacioAcademicoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const espacio_academico_controller_1 = require("./espacio-academico.controller");
const espacio_academico_service_1 = require("./espacio-academico.service");
const espacio_academico_schema_1 = require("./schemas/espacio_academico.schema");
let EspacioAcademicoModule = class EspacioAcademicoModule {
};
EspacioAcademicoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: espacio_academico_schema_1.Espacio_academico.name, schema: espacio_academico_schema_1.Espacio_academicoSchema }])
        ],
        controllers: [espacio_academico_controller_1.EspacioAcademicoController],
        providers: [espacio_academico_service_1.EspacioAcademicoService],
        exports: [espacio_academico_service_1.EspacioAcademicoService]
    })
], EspacioAcademicoModule);
exports.EspacioAcademicoModule = EspacioAcademicoModule;
//# sourceMappingURL=espacio-academico.module.js.map