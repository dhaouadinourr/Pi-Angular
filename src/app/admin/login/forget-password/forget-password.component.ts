import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css',
  '../../../../assets/back/css/bootstrap.min.css',
  
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/paper-dashboard.css']
})
export class ForgetPasswordComponent implements OnInit {

  emailToSend!:string

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    this._authService.forgetPassword(this.emailToSend).subscribe((data:any)=>{
      console.log(data)
    })
  }

}
