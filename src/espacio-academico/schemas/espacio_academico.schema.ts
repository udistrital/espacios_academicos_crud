import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'espacio_academico'})
export class Espacio_academico extends Document {

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    codigo_abreviacion: string

    @Prop({required: true})
    codigo: string
    
    @Prop({required: true})
    plan_estudio_id: string

    @Prop({required: true})
    proyecto_academico_id: number
    
    @Prop({required: true})
    creditos: number

    @Prop({type: Object})
    distribucion_horas

    @Prop({required: true})
    tipo_espacio_id: number    //pk sql

    @Prop({required: true})
    clasificacion_espacio_id: number    //pk sql

    @Prop({required: true})
    enfoque_id: number    //pk sql

    @Prop({type: Object})
    espacios_requeridos
    
    @Prop({required: true})
    grupo: string
    
    @Prop({required: true})
    inscritos: number

    @Prop({required: true})
    periodo_id: number  //pk sql
    
    @Prop({required: true})
    docente_id: number  //pk sql
    
    @Prop({required: true})
    horario_id: string

    @Prop({type: Object})
    espacio_academico_padre
    
    @Prop({type: Object})
    soporte_documental

    @Prop({type: Object})
    estado_aprobacion_id

    @Prop({required: true})
    observacion: string

    @Prop({required: true})
    activo: boolean

    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date
}

export const Espacio_academicoSchema = SchemaFactory.createForClass(Espacio_academico);