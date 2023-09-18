import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'espacio_academico_docentes'})
export class Agrupacion_espacios extends Document {

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    codigo_abreviacion: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    facultad_id: number
    
    @Prop({required: true})
    color_hex: string
    
    @Prop({required: true})
    activo: boolean
    
    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date
}

export const Agrupacion_espaciosSchema = SchemaFactory.createForClass(Agrupacion_espacios)