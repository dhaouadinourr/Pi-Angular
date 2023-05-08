import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { RoleGuard } from 'src/app/_guard/role.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  user:User = new User();
  data: any;
  role:any;
  username:any;

  constructor(
    private _authService:AuthService,
    private router: Router,
    private roleGuard : RoleGuard
    ) { }

  ngOnInit(): void {
  }

  login(){
    console
    this.submitted = true
    this._authService.LoginWithAdmin(this.user).subscribe((res:any)=>{
      console.log(res.body.roles)
      this.data = res.body.token
      this.role = res.body.roles
      this.username = res.body.username
      localStorage.setItem('adminToken',this.data)
      localStorage.setItem('role',this.role)     
      localStorage.setItem('username',this.username) 

      if(this.role == 'ROLE_ADMIN'){
        this.router.navigate(['/admin/users']);
      }else{
        this.router.navigate(['/login']);
      }
    })
    //this.redirection();    
  }

  

}
