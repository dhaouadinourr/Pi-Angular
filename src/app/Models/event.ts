import { CategorieEvent } from "./categorie-event";

export class Event {
   id_event!:number;
   nomEvent!:String;
   details!:String;
   dateDebut!:Date;
   dateFin!:Date;
   categ!:CategorieEvent;
   commentaire!: Array<Comment>;
 

}
