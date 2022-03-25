import { ApiProperty } from "@nestjs/swagger";

export class Espacio_academico_estudiantesDto{

    @ApiProperty()
    readonly espacio_academico_id: string;

    @ApiProperty()
    readonly estudiante_id: number; //pk sql number
    
    @ApiProperty()
    readonly periodo_id: number; //pk sql number
    
    @ApiProperty()
    activo: boolean;
    
    @ApiProperty()
    readonly fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;
}