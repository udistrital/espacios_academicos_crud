import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { EstadoAprobacionService } from './estado-aprobacion.service';
import { Estado_aprobacionDto } from './dto/estado_aprobacion.dto';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('estado-aprobacion')
@Controller('estado-aprobacion')
export class EstadoAprobacionController {
    constructor(
        private estadoAprobacionService: EstadoAprobacionService
    ) {}

    @Post()
    async post(@Res() res, @Body() estado_aprobacionDto: Estado_aprobacionDto) {
        const estado_aprobacion = await this.estadoAprobacionService.post(estado_aprobacionDto);
        if(!estado_aprobacion) {
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
            Data: estado_aprobacion
        });
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const estado_aprobacion = await this.estadoAprobacionService.getAll(filterDto);
        if(!estado_aprobacion || estado_aprobacion.length == 0) {
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
            Data: estado_aprobacion
        });
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const estado_aprobacion = await this.estadoAprobacionService.getById(id);
        if(!estado_aprobacion) {
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
            Data: estado_aprobacion
        });
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() estado_aprobacionDto: Estado_aprobacionDto) {
        const estado_aprobacion = await this.estadoAprobacionService.put(id, estado_aprobacionDto);
        if(!estado_aprobacion) {
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
            Data: estado_aprobacion
        });
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const estado_aprobacion = await this.estadoAprobacionService.delete(id);
        if(!estado_aprobacion) {
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
