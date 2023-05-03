import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class ListUserComponent implements OnInit {
  
  userList: Array<User> = [];
  idUsTodelete!:any
  constructor(private serviceuser:UserService) { }

  ngOnInit(): void {
    this.serviceuser.getusers().subscribe(
      (data)=>{
        this.userList=data.body;
        console.log(this.userList)
      }
    
    )
  }

  refresh(): void {
    window.location.reload();
  }

  deleteUser(id:any){
    this.serviceuser.deleteUser(id).subscribe({
      next:()=>this.userList=this.userList.filter((p)=> p.id!=id),
    })
  }

}
