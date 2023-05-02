import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css',
  '../../../../assets/back/css/bootstrap.min.css',
  
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/paper-dashboard.css']
})
export class ResetPasswordComponent implements OnInit {

  token!:any
  passworddd!:any

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private _authService:AuthService
    ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  resetPassword(password:any){
    this.http.post('http://localhost:8082/api/auth/resetPassword', { password, token: this.token }).subscribe(
      response => {
        console.log(response);
        // handle success
      },
      error => {
        console.log(error);
        // handle error
      }
    )
  }

}
