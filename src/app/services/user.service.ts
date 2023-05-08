import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.apiBaseUrl}`;
 
  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/createPublicProduct`, { observe: 'response' });
  }
  getusers(): Observable<HttpResponse<any>> {
    console.log(localStorage.getItem('adminToken'))
    const token =localStorage.getItem('adminToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<HttpResponse<any>>(`${this.url}/api/auth/users`, { headers, observe: 'response' });

  }

  deleteUser(id:any) : Observable<HttpResponse<any>>{
    console.log(localStorage.getItem('adminToken'))
    const token =localStorage.getItem('adminToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.url}/api/auth/deleteuser/${id}`,{ headers,observe: 'response' });
  }

  getUserById(id:any) : Observable<HttpResponse<any>>{  
    return this.http.get(`${this.url}/api/auth/getUserById/${id}`,{ observe: 'response' });
  }

  editUser(formData:any): Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/api/auth/edit`,formData,{ observe: 'response' });
  }
  resetPassword(tokenn: string, passwordd: string) {
    let requestBody = {
      "token": tokenn,
      "password": passwordd
    };
    return this.http.post(`${this.url}/api/auth/resetPassword`, requestBody);
  }
}
