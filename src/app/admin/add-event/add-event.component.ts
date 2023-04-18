import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})

export class AddEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
