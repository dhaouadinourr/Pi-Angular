import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { RoleGuard } from 'src/app/_guard/role.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-f',
  templateUrl: './login-f.component.html',
  styleUrls: ['./login-f.component.css']
})
export class LoginFComponent implements OnInit {

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
    })
    //this.redirection();    
  }

  redirection(){
    let role = localStorage.getItem('role')
    if(role == 'ROLE_USER'){
      this.router.navigate(['/home']);
    }else if(role == 'ROLE_CLUB'){
      this.router.navigate(['club'])
    }else
  this.router.navigate(['/']);
    console.log(role)
  }

}
