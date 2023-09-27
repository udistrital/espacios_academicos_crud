import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgrupacionEspaciosService } from './agrupacion-espacios.service';
import { Agrupacion_espaciosDto } from './dto/agrupacion-espacios.dto';
import { FilterDto } from 'src/filters/dto/filter.dto';

@ApiTags('agrupacion-espacios')
@Controller('agrupacion-espacios')
export class AgrupacionEspaciosController {
    constructor(
        private agrupacionEspaciosService: AgrupacionEspaciosService
    ) {}

    @Post()
    async post(@Res() res, @Body() agrupacion_espaciosDto: Agrupacion_espaciosDto) {
        const agrupacion_espacios = await this.agrupacionEspaciosService.post(agrupacion_espaciosDto);
        if(!agrupacion_espacios) {
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Post: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        res.status(HttpStatus.CREATED).json({
            Success: true,
            Status: "201",
            Message: "Registration successful",
            Data: agrupacion_espacios
        });
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const agrupacion_espacios = await this.agrupacionEspaciosService.getAll(filterDto);
        if(!agrupacion_espacios || agrupacion_espacios.length == 0) {
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetAll: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Request successful",
            Data: agrupacion_espacios
        });
    }

    @Get('/:id')
    async getByID(@Res() res, @Param('id') id: string) {
        const agrupacion_espacios = await this.agrupacionEspaciosService.getById(id);
        if(!agrupacion_espacios) {
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetOne: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Request successful",
            Data: agrupacion_espacios
        });
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() agrupacion_espaciosDto: Agrupacion_espaciosDto) {
        const agrupacion_espacios = await this.agrupacionEspaciosService.put(id, agrupacion_espaciosDto);
        if(!agrupacion_espacios) {
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Put: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        res.status(HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Update successful",
            Data: agrupacion_espacios
        });
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const agrupacion_espacios = await this.agrupacionEspaciosService.delete(id);
        if(!agrupacion_espacios) {
            throw new HttpException({
                Sucess: false,
                Status: "404",
                Message: "Error service Delete: Request contains incorrect parameter",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json({
            Success: true,
            Status: "200",
            Message: "Delete successful",
            Data: {
                _id: id
            }
        });
    }
}
