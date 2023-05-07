import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Competence } from '../Models/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  url = `${environment.apiBaseUrl}`

  constructor(
    private http:HttpClient
  ) { }

  addComptence(competence:Competence) : Observable<HttpResponse<any>>{
    return this.http.post(`${this.url}/Competence/add`,competence, {observe : 'response'})
  }

  editCompetence(competence:Competence) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/Competence/update`,competence, {observe : 'response'})
  }

  getAll(): Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Competence/getAll`, {observe : 'response'})
  }

  getById(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Competence/getById/${id}`, {observe : 'response'})
  }

  delete(id:any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/Competence/delete/${id}` , {observe : 'response'})
  }

}
