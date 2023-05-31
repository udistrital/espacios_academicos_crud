import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({collection: 'estado_aprobacion'})
export class Estado_aprobacion extends Document {

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    codigo_abreviacion: string

    @Prop({required: true})
    activo: boolean

    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date
}

export const Estado_aprobacionSchema = SchemaFactory.createForClass(Estado_aprobacion)