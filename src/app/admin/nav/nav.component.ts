import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../../assets/back/css/bootstrap.min.css',
  
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css'
  ]
})
export class NavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('role');
    this.router.navigate(['admin/login']);
  }
}
