import { CategorieEvent } from "./categorie-event";
import { EventComment } from "./event-comment";
import { User } from "./user";

export class Event {
   id_event!:number;
   nomEvent!:String;
   details!:String;
   dateDebut!:Date;
   dateFin!:Date;
   categ!:CategorieEvent;
   comments!: Array<EventComment>;
   userevent!:Array<User>
 

}
