import { Injectable } from '@angular/core';
import { EventComment } from '../Models/event-comment';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class EventCommentService {

  baseUrl = 'http://localhost:9090/eventComment';
    categ: EventComment = new EventComment();
  
    
    public dataForm!: FormGroup;
    constructor(private httpClient: HttpClient) {}
    storageUserAsStr: any = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : null;

   
addCom(c: EventComment): Observable<EventComment> {
  return this.httpClient.post<EventComment>(
    'http://localhost:9090/comment/add-commentaire',
    c
  );
}

modifyCom(c: EventComment): Observable<EventComment> {
  return this.httpClient.put<EventComment>(
    'http://localhost:9090/comment/modify-commentaire',
    c
  );
}

deleteCom(id: any) {
  return this.httpClient.delete<EventComment>(
    'http://localhost:9090/comment/remove-client/' + id
  );
}

getByIDCom(idc: number): Observable<EventComment> {
  return this.httpClient.get<EventComment>(
    'http://localhost:9090/comment/retrieve-commentaire/' + idc
  );
}

getByIDComUser(idc: number): Observable<User> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.storageUserAsStr.token}`,
    }),
    withCredentials: true,
  };
  return this.httpClient.get<User>(
    'http://localhost:9090/comment/getUser/' + idc,
    httpOptions
  );
}
}
