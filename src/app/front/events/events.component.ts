import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css',
  '../../../assets/front/css/testimonial.css' ,
  '../../../assets/front/css/styles.css',
  '../../../assets/front/css/font-awesome.min.css',
  '../../../assets/front/css/demo.css',
  '../../../assets/front/css/bootstrap.min.css',
  
]
})
export class EventsComponent implements OnInit {

  @Input() events: Event[] = [];
  files: any = [];
  id!: number;
  
  p:number=1;



  constructor(

    public eventService: EventService,
  
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {

    this.listProducts();
    this.eventService.getEventList()
    .subscribe((data: Event[]) => {
      this.events = data;
    });
  }
  listProducts() {
    this.eventService.getEventList().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
    this.getProductImages();
    
  }

    

  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.eventService.getImagesByEvent(this.id).subscribe((data) => {
      this.files = data;
    });
  }

 
}
