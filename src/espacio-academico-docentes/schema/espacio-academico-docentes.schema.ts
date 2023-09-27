import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'espacio_academico_docentes'})
export class Espacio_academico_docentes extends Document {

    @Prop({type: Object})
    espacio_academico_id

    @Prop({required: true})
    docente_id: number   //pk sql number
    
    @Prop({required: true})
    periodo_id: number  //pk sql number
    
    @Prop({required: true})
    activo: boolean
    
    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date
}

export const Espacio_academico_docentesSchema = SchemaFactory.createForClass(Espacio_academico_docentes)