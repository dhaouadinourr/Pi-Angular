import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventbycateg',
  templateUrl: './eventbycateg.component.html',
  styleUrls: ['./eventbycateg.component.css']
})
export class EventbycategComponent implements OnInit {
  events: Event[] = [];
  files: any = [];
  id!: number;
  constructor(
    public eventService: EventService,
    private route: ActivatedRoute,
  
  ) { }

  ngOnInit(): void {
    //relodaing page
    this.route.params.subscribe((params) => {
      this.getEventByCategory();
    });
  //  this.getProductImages();
  }
  getEventByCategory() {
    this.id = this.route.snapshot.params['id'];
    this.eventService.getEventByCategory(this.id).subscribe((data) => {
      console.log(data);
      this.events = data;
    });
  }
  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.eventService.getImagesByEvent(this.id).subscribe((data) => {
      this.files = data;
    });
  }
 
}
