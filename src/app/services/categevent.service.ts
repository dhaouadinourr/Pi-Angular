import { Injectable } from '@angular/core';
import { CategorieEvent } from '../Models/categorie-event';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategeventService {
    baseUrl = 'http://localhost:9090/categorie';
    categ: CategorieEvent = new CategorieEvent();
  
    
    public dataForm!: FormGroup;
    constructor(private httpClient: HttpClient) {}

    getCategEventList(): Observable<CategorieEvent[]> {
      return this.httpClient.get<CategorieEvent[]>(this.baseUrl + '/getAll');
    }
    getCategEventById(id: number): Observable<CategorieEvent> {
      return this.httpClient.get<CategorieEvent>(`${this.baseUrl}/get/` + id);
    }
  
    addCategEvent(category: CategorieEvent): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/add', category);
    }
    
  
    updateCategEvent(category: CategorieEvent): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/update', category);
    }
    deleteCategEvent(categevent: CategorieEvent): Observable<Event> {
      const url = `${this.baseUrl}/delete/${categevent.id_categ}`;
      return this.httpClient.delete<Event>(url);
}
}
