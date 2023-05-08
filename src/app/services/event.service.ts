import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Event } from '../Models/event';
import { User } from '../Models/user';
import { EventComment } from '../Models/event-comment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})

export class EventService {
  baseUrl = 'http://localhost:9090/event';
  test = 'http://localhost:9090'
  event: Event = new Event();
  categ: EventComment = new EventComment();

  public dataForm!: FormGroup;

  constructor(private httpClient: HttpClient) {}
  
  storageUserAsStr: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;


  getEventList(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl + '/getAll');
  }
  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}/get/` + id);
  }

  addEvent(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/add', formData);
  }

  updateEvent(formData: FormData): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/update', formData);
  }
  deleteEvent(event: Event): Observable<Event> {
    const url = `${this.baseUrl}/delete/${event.id_event}`;
    return this.httpClient.delete<Event>(url);
  }

  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  getImagesByEvent(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + '/images/' + id);
  }
  getEventByCategory(id: number): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl + '/getEvent/' + id);
  }
  participant(eventId: number,userId:number): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl +`/addusers/${eventId}/${userId}`,null);
  }

  unparticipant(eventId: number,userId:number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl +`/removeusers/${eventId}/${userId}`);
  }
  search(startDate: string,endDate:string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl +`/findbydate?startDate=${startDate}&endDate=${endDate}`);
  }

  

  addCom(c: EventComment): Observable<EventComment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(c)
    return this.httpClient.post<EventComment>(
      'http://localhost:9090/eventComment/add-commentaire',
      c
    );
  }
  
  modifyCom(c: EventComment): Observable<EventComment> {
    return this.httpClient.put<EventComment>(
      'http://localhost:9090/eventComment/modify-commentaire',
      c
    );
  }
  
  deleteCom(id: any) {
    return this.httpClient.delete<EventComment>(
      'http://localhost:9090/eventComment/remove-client/' + id
    );
  }
  
  getByIDCom(idc: number): Observable<EventComment> {
    return this.httpClient.get<EventComment>(
      'http://localhost:9090/eventComment/retrieve-commentaire/' + idc
    );
  }
  
  getByIDComUser(idc: number): Observable<User> {
   
    return this.httpClient.get<User>(
      'http://localhost:9090/eventComment/getUser/' + idc
    );
  }
  }
  
