import { ApiProperty } from "@nestjs/swagger";

export class Espacio_academicoDto{

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
    readonly creditos: number;

    @ApiProperty()
    readonly distribucion_horas: Object;

    @ApiProperty()
    readonly clasificacion_espacio_id: string;

    @ApiProperty()
    readonly espacios_requeridos: Object;
    
    @ApiProperty()
    readonly grupo: string;

    @ApiProperty()
    readonly inscritos: number;

    @ApiProperty()
    readonly docente_id: string;

    @ApiProperty()
    readonly horario_id: string;

    @ApiProperty()
    readonly espacio_academico_padre: string;
    
    @ApiProperty()
    activo: boolean;
    
    @ApiProperty()
    readonly fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}