import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Espacio_academicoDto } from './dto/espacio_acadmico.dto';
import { EspacioAcademicoService } from './espacio-academico.service';

import { FilterDto } from "../filters/dto/filter.dto";

@Controller('espacio-academico')
export class EspacioAcademicoController {
    constructor(private espacioAcademicoService: EspacioAcademicoService){}

    @Post()
    async post(@Res() res, @Body() espacio_academicoDto: Espacio_academicoDto){
        const espacio_academico = await this.espacioAcademicoService.post(espacio_academicoDto);
        if(!espacio_academico){
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
                Data: espacio_academico
            }
        );
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto){
        const espacio_academico = await this.espacioAcademicoService.getAll(filterDto);
        if(!espacio_academico){
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
                Data: espacio_academico
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string){
        const espacio_academico = await this.espacioAcademicoService.getById(id);
        if(!espacio_academico){
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
                Data: espacio_academico
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() espacio_academicoDto: Espacio_academicoDto){
        const espacio_academico = await this.espacioAcademicoService.put(id, espacio_academicoDto);
        if(!espacio_academico){
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
                Data: espacio_academico
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string){
        const espacio_academico = await this.espacioAcademicoService.delete(id);
        if(!espacio_academico){
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
