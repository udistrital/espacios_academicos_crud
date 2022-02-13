import { FilterDto } from './dto/filter.dto';
export declare class FiltersService {
    private readonly filterDto;
    constructor(filterDto: FilterDto);
    getQuery(): Object;
    getFields(): Object;
    getSortBy(): any[];
    getLimitAndOffset(): Object;
    isPopulated(): boolean;
}
