import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class ListEventComponent implements OnInit {

  eventList: Array<Event> = [];


  p: number=1;
  constructor(public eventService: EventService) {}

  
  ngOnInit(): void {
    this.getProducts()
    console.log(this.eventList)
    
  }
  getProducts(): void {
    this.eventService.getEventList().subscribe((data:Event[]) => {
      this.eventList = data;
    });
  }
  
  onDelete(event: Event) {
    this.eventService
      .deleteEvent(event)
      .subscribe(
        () =>
          (this.eventList = this.eventList.filter(
            (t) => t.id_event !== event.id_event
          ))
      );
  }
  }
