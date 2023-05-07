import { Competence } from "./competence";

export class Mymission{
    id?:number;
    title?:string;
    description?:string;
    location?:string;
    dateDebut?:Date;
    dateFin?:Date;
    nbPlaces?:number;
    competences!:Competence[]
}