import { ApiProperty } from "@nestjs/swagger";

export class Agrupacion_espaciosDto{

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly codigo_abreviacion: string;
    
    @ApiProperty()
    readonly descripcion: string;
    
    @ApiProperty()
    readonly facultad_id: number; //pk sql number

    @ApiProperty()
    readonly color_hex: string; //hex
    
    @ApiProperty()
    activo: boolean;
    
    @ApiProperty()
    fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;
}