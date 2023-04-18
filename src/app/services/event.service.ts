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

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = 'http://localhost:9090/event';
  event: Event = new Event();

  
  public dataForm!: FormGroup;
  constructor(private httpClient: HttpClient) {}

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
    return this.httpClient.post(this.baseUrl + '/update', formData);
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
  getEventByCategory(id: number): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl + '/categ/' + id);
  }
}
