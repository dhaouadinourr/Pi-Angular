import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ERole } from 'src/app/Models/eRole';
import { Role } from 'src/app/Models/roles';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class SignupComponent implements OnInit {

  user : User = new User();
  roles : Role[]=[]
  constructor(
    private _authService : AuthService,
    private _router : Router
    ) { }

  ngOnInit(): void {
   
    //console.log(this.roles)
  }

  signUp(){
   
    let role = new Role("ROLE_ADMIN");
    this.roles.push(role);
    console.log(this.user)
   
  
    this.user.role = this.roles
    this._authService.SignUpWithAdmin(this.user).subscribe({
      next :() => this._router.navigateByUrl('/admin/login')
    })
  }

}
