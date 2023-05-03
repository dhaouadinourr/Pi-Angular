import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css',
  '../../../../assets/back/css/bootstrap.min.css',
  
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/paper-dashboard.css']
})
export class EditUserComponent implements OnInit {

  user : User =new User()
  idUser!:any
  constructor(
    private _authService:UserService,
    private _route:ActivatedRoute,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this.idUser = this._route.snapshot.params['id'];
    this._authService.getUserById(this.idUser).subscribe((data:any)=>{
      this.user=data.body
    })
  }

  editUser(){ 
    this._authService.editUser(this.user).subscribe({
      next :()=> this._router.navigateByUrl('/admin/users')
  })
}

}
