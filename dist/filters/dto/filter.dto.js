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
exports.FilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class FilterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'query - Filter. e.g. col1:v1,col2:v2 …' }),
    __metadata("design:type", String)
], FilterDto.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'fields - Fields returned. e.g. col1,col2 …' }),
    __metadata("design:type", String)
], FilterDto.prototype, "fields", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'sortby - Sorted-by fields. e.g. col1,col2 …' }),
    __metadata("design:type", String)
], FilterDto.prototype, "sortby", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'order - Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc …' }),
    __metadata("design:type", String)
], FilterDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'limit - Limit the size of result set. Must be an integer' }),
    __metadata("design:type", String)
], FilterDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'offset - Start position of result set. Must be an integer' }),
    __metadata("design:type", String)
], FilterDto.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'populate - show subqueries. Must be a boolean' }),
    __metadata("design:type", String)
], FilterDto.prototype, "populate", void 0);
exports.FilterDto = FilterDto;
//# sourceMappingURL=filter.dto.js.map