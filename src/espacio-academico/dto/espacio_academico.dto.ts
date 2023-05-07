import { ApiProperty } from "@nestjs/swagger";

export class Espacio_academicoDto{

    _id: string

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;
    
    @ApiProperty()
    readonly codigo_abreviacion: string;
    
    @ApiProperty()
    readonly codigo: string;

    @ApiProperty()
    readonly plan_estudio_id: string;

    @ApiProperty()
    readonly proyecto_academico_id: number;     //pk sql

    @ApiProperty()
    readonly creditos: number;

    @ApiProperty()
    readonly distribucion_horas: Object;

    @ApiProperty()
    readonly clasificacion_espacio_id: number;  //pk sql

    @ApiProperty()
    readonly espacios_requeridos: Object;
    
    @ApiProperty()
    readonly grupo: string;

    @ApiProperty()
    readonly inscritos: number;

    @ApiProperty()
    readonly periodo_id: number;  //pk sql

    @ApiProperty()
    readonly docente_id: number;    //pk sql

    @ApiProperty()
    readonly horario_id: string;

    @ApiProperty()
    readonly espacio_academico_padre: string;
    
    @ApiProperty()
    activo: boolean;
    
    @ApiProperty()
    fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}