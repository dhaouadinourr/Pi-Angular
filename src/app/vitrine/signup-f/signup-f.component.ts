import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/Models/roles';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-f',
  templateUrl: './signup-f.component.html',
  styleUrls: ['./signup-f.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class SignupFComponent implements OnInit {
  user : User = new User();
  roles : Role[]=[]
  constructor(
    private _authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  signUp(){
   
    let role = new Role("ROLE_USER");
    this.roles.push(role);
    console.log(this.user)
   
  
    this.user.role = this.roles
    this._authService.SignUpWithAdmin(this.user).subscribe({
      next :()=> this._router.navigateByUrl('/login')
    })
  }
}
