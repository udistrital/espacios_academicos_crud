import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'espacio_academico_estudiantes'})
export class Espacio_academico_estudiantes extends Document {

    @Prop({type: Object})
    espacio_academico_id

    @Prop({required: true})
    estudiante_id: number   //pk sql number
    
    @Prop({required: true})
    periodo_id: number  //pk sql number
    
    @Prop({required: true})
    activo: boolean
    
    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date
}

export const Espacio_academico_estudiantesSchema = SchemaFactory.createForClass(Espacio_academico_estudiantes)