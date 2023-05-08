import { User } from "./user"

export class ChatMessage {
    id?:number
    content?:String
    sender?:User 
    reciver?:User 
    senddate?:Date 
}