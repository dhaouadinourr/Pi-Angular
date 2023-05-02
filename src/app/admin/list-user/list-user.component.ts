import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
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
    this.serviceuser.deleteUser(id).subscribe((data:any)=>{
      this.refresh();
      console.log(data)
    })
  }

}
