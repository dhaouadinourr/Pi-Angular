import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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
    private router:Router,
    private http: HttpClient,
    private _authService:AuthService,private serviceuser:UserService
    ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    console.log(this.token)
  }

  onSubmit() {
  
  }
  resetPassword(password:string){
     console.log(this.token,password)
    this.serviceuser.resetPassword(this.token,password).subscribe({
      next :() => this.router.navigateByUrl('/admin/login')
    })
  }
 
}
