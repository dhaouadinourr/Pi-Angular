import { Byte } from "@angular/compiler/src/util";
import { Comment } from "./comment";

export class Article {
    id!:number ;
    title!:String;
    content!:String;
    description!:String;
    picture!: string;
    etoile!:DoubleRange;
    updatedAt!:Date;
    createdAt!:Date;
    comments!: Comment[];
    clientEtoile!: Map<number, number>;

}
