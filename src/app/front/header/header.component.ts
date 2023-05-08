import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  '../../../assets/front/css/testimonial.css',
  '../../../assets/front/css/styles.css',
  '../../../assets/front/css/font-awesome.min.css' ,
  '../../../assets/front/css/demo.css',
  '../../../assets/front/css/bootstrap.min.css',
]
})
export class HeaderComponent implements OnInit {

  userToken!:any
  user!:boolean
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  
      this.userToken = localStorage.getItem('adminToken')
      if( this.userToken){this.user=true}
      else{this.user=false}
      console.log(this.userToken)
      
       
    }

  logOut() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }

 
  


}
