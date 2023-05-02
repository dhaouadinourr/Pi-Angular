import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router ,CanActivate} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  url = `${environment.apiBaseUrl}`;
  private isAuthenticated = false;

  constructor(private http: HttpClient,private router : Router) { }

  LoginWithAdmin(formData:any){
    return this.http.post(`${this.url}/api/auth/signin`, formData, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );;
  }

  SignUpWithAdmin(formData:any){
    return this.http.post(`${this.url}/api/auth/signup`, formData, { observe: 'response' })
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // just a test ... more could would go here
    return throwError(() => err);
  }

  forgetPassword(email:string){
    return this.http.post(`${this.url}/api/auth/forgotpassword?email=${email}`, { observe: 'response' })
  }

  resetPassword(){
    return this.http.post(`${this.url}/api/auth/resetPassword`, { observe: 'response' })
  }

  
}
