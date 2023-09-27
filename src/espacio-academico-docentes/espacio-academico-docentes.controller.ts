import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EspacioAcademicoDocentesService } from './espacio-academico-docentes.service';
import { Espacio_academico_docentesDto } from './dto/espacio-academico-docentes.dto';
import { FilterDto } from 'src/filters/dto/filter.dto';

@ApiTags('espacio-academico-docentes')
@Controller('espacio-academico-docentes')
export class EspacioAcademicoDocentesController {
    constructor (
        private espacioAcademicoDocentesService: EspacioAcademicoDocentesService,
    ) {}

    @Post()
    async post(@Res() res, @Body() espacio_academico_docentesDto: Espacio_academico_docentesDto) {
        const espacio_academico_docentes = await this.espacioAcademicoDocentesService.post(espacio_academico_docentesDto);
        if(!espacio_academico_docentes){
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Post: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        res.status(HttpStatus.CREATED).json(
            {
                Success: true,
                Status: "201",
                Message: "Registration successful",
                Data: espacio_academico_docentes
            }
        );
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const espacio_academico_docentes = await this.espacioAcademicoDocentesService.getAll(filterDto);
        if(!espacio_academico_docentes || espacio_academico_docentes.length == 0){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetAll: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Request successful",
                Data: espacio_academico_docentes
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const espacio_academico_docentes = await this.espacioAcademicoDocentesService.getById(id);
        if(!espacio_academico_docentes){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetOne: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Request successful",
                Data: espacio_academico_docentes
            }
        );
    }

    @Put()
    async put(@Res() res, @Param('id') id: string, @Body() espacio_academico_docentesDto: Espacio_academico_docentesDto) {
        const espacio_academico_docentes = await this.espacioAcademicoDocentesService.put(id, espacio_academico_docentesDto);
        if(!espacio_academico_docentes){
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Put: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        return res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Update successful",
                Data: espacio_academico_docentes
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const espacio_academico_docentes = await this.espacioAcademicoDocentesService.delete(id);
        if(!espacio_academico_docentes){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service Delete: Request contains incorrect parameter",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        return res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Delete successful",
                Data: {
                    _id: id
                }
            }
        );
    }
}
