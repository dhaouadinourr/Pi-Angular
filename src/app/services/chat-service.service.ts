import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
import { Observable,of } from 'rxjs';
import { ChatMessage } from '../Models/chat-message';
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  // clientHost= environment.ClientHost
  // AdminHost=environment.AdminHost
  // authentication=environment.ClientHost
  // host=environment.host;
  constructor(private http:HttpClient) { }

//   getAllStudent():Observable<User[]>{
//     return this.http.get<User[]>(this.clientHost+"/show")
//   }

//  getchat(ids:any,idr:any):Observable<ChatMessage[]>{
 
//   return this.http.get<ChatMessage[]>(this.authentication+ `/getchatbetwinsandr/${ids}/${idr}`)
// }
//  updatechat(chat:ChatMessage , id:any,ids:any):Observable<ChatMessage>{
//   return this.http.put<ChatMessage>(this.clientHost+`/updatechat/${ids}/${id}`,chat)
//  }
}