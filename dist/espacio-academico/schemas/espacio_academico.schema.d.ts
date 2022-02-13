import { Document } from "mongoose";
export declare class Espacio_academico extends Document {
    nombre: string;
    descripcion: string;
    codigo_abreviacion: string;
    codigo: string;
    plan_estudio_id: string;
    creditos: number;
    distribucion_horas: any;
    clasificacion_espacio_id: string;
    espacios_requeridos: any;
    grupo: string;
    inscritos: number;
    docente_id: string;
    horario_id: string;
    espacio_academico_padre: string;
    activo: boolean;
    fecha_creacion: Date;
    fecha_modificacion: Date;
}
export declare const Espacio_academicoSchema: import("mongoose").Schema<Espacio_academico, import("mongoose").Model<Espacio_academico, any, any, any>, any, any>;
