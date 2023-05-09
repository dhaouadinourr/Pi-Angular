import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Competence } from '../Models/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  url = 'http://localhost:9090'

  constructor(
    private http:HttpClient
  ) { }

  addComptence(competence:Competence) : Observable<HttpResponse<any>>{
    console.log(localStorage.getItem('adminToken'))
    const token =localStorage.getItem('adminToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.url}/Competence/add`,competence, {headers ,observe : 'response'})
  }

  editCompetence(competence:Competence) : Observable<HttpResponse<any>>{
    console.log(localStorage.getItem('adminToken'))
    const token =localStorage.getItem('adminToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.url}/Competence/update`,competence, {headers ,observe : 'response'})
  }

  getAll(): Observable<HttpResponse<any>>{
    console.log(localStorage.getItem('adminToken'))
    const token =localStorage.getItem('adminToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.url}/Competence/getAll`, {headers ,observe : 'response'})
  }

  getById(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/Competence/getById/${id}`, {observe : 'response'})
  }

  delete(id:any) : Observable<HttpResponse<any>>{
    console.log(localStorage.getItem('adminToken'))
    const token =localStorage.getItem('adminToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.url}/Competence/delete/${id}` , {headers ,observe : 'response'})
  }

}
