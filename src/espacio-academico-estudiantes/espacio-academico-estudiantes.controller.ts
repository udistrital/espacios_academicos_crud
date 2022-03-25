import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Espacio_academico_estudiantesDto } from './dto/espacio_academico_estudiantes.dto';
import { EspacioAcademicoEstudiantesService } from './espacio-academico-estudiantes.service';

import { FilterDto } from "../filters/dto/filter.dto";

@Controller('espacio-academico-estudiantes')
export class EspacioAcademicoEstudiantesController {
    constructor(private espacioAcademicoEstudiantesService: EspacioAcademicoEstudiantesService){}

    @Post()
    async post(@Res() res, @Body() espacio_academico_estudiantesDto: Espacio_academico_estudiantesDto){
        const espacio_academico_estudiantes = await this.espacioAcademicoEstudiantesService.post(espacio_academico_estudiantesDto);
        if(!espacio_academico_estudiantes){
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
                Data: espacio_academico_estudiantes
            }
        );
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto){
        const espacio_academico_estudiantes = await this.espacioAcademicoEstudiantesService.getAll(filterDto);
        if(!espacio_academico_estudiantes || espacio_academico_estudiantes.length == 0){
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
                Data: espacio_academico_estudiantes
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string){
        const espacio_academico_estudiantes = await this.espacioAcademicoEstudiantesService.getById(id);
        if(!espacio_academico_estudiantes){
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
                Data: espacio_academico_estudiantes
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() espacio_academico_estudiantesDto: Espacio_academico_estudiantesDto){
        const espacio_academico_estudiantes = await this.espacioAcademicoEstudiantesService.put(id, espacio_academico_estudiantesDto);
        if(!espacio_academico_estudiantes){
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
                Data: espacio_academico_estudiantes
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string){
        const espacio_academico_estudiantes = await this.espacioAcademicoEstudiantesService.delete(id);
        if(!espacio_academico_estudiantes){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service Put: Request contains incorrect parameter",
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
