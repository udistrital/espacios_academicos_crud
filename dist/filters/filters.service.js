"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersService = void 0;
class FiltersService {
    constructor(filterDto) {
        this.filterDto = filterDto;
    }
    getQuery() {
        let queryObj = {};
        if (this.filterDto.query) {
            let queryProperties = this.filterDto.query.split(',');
            queryProperties.forEach(function (property) {
                let tup = property.split(/:(.+)/);
                queryObj[tup[0]] = tup[1];
            });
        }
        return queryObj;
    }
    getFields() {
        let fieldsObj = {};
        if (this.filterDto.fields) {
            let fieldsProperties = this.filterDto.fields.split(',');
            fieldsProperties.forEach(function (property) {
                fieldsObj[property] = 1;
            });
        }
        return fieldsObj;
    }
    getSortBy() {
        let sortbyArray = [];
        if (this.filterDto.sortby) {
            let sortbyProperties = this.filterDto.sortby.split(',');
            if (this.filterDto.order) {
                let orderProperties = this.filterDto.order.split(',');
                if (orderProperties.length == 1) {
                    let orderTerm = (this.filterDto.order == 'desc') ? -1 : 1;
                    sortbyProperties.forEach(function (property) {
                        sortbyArray.push([property, orderTerm]);
                    });
                }
                else if (sortbyProperties.length == orderProperties.length) {
                    for (let i = 0; i < sortbyProperties.length; i++) {
                        sortbyArray.push([sortbyProperties[i], (orderProperties[i] == 'desc' ? -1 : 1)]);
                    }
                }
                else {
                    sortbyProperties.forEach(function (property) {
                        sortbyArray.push([property, 1]);
                    });
                }
            }
            else {
                sortbyProperties.forEach(function (property) {
                    sortbyArray.push([property, 1]);
                });
            }
        }
        return sortbyArray;
    }
    getLimitAndOffset() {
        return { skip: parseInt(this.filterDto.offset), limit: parseInt(this.filterDto.limit) };
    }
    isPopulated() {
        return this.filterDto.populate === 'true';
    }
}
exports.FiltersService = FiltersService;
//# sourceMappingURL=filters.service.js.map