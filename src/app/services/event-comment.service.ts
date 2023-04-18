import { Injectable } from '@angular/core';
import { EventComment } from '../Models/event-comment';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventCommentService {

  baseUrl = 'http://localhost:9090/eventComment';
    categ: EventComment = new EventComment();
  
    
    public dataForm!: FormGroup;
    constructor(private httpClient: HttpClient) {}

    getCategEventList(): Observable<EventComment[]> {
      return this.httpClient.get<EventComment[]>(this.baseUrl + '/getAll');
    }
    getCategEventById(id: number): Observable<EventComment> {
      return this.httpClient.get<EventComment>(`${this.baseUrl}/get/` + id);
    }
  
    addCategEvent(formData: FormData): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/add', formData);
    }
  
    updateCategEvent(formData: FormData): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/update', formData);
    }
    deleteCategEvent(categevent: EventComment): Observable<Event> {
      const url = `${this.baseUrl}/delete/${categevent.idCom}`;
      return this.httpClient.delete<Event>(url);
}
}
