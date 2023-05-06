import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/event';
import { EventComment } from 'src/app/Models/event-comment';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-singlevent',
  templateUrl: './singlevent.component.html',
  styleUrls: ['./singlevent.component.css',
  '../../../assets/front/css/testimonial.css' ,
  '../../../assets/front/css/styles.css',
  '../../../assets/front/css/font-awesome.min.css',
  '../../../assets/front/css/demo.css',
  '../../../assets/front/css/bootstrap.min.css',
  
]
})
export class SingleventComponent implements OnInit {
  event: any ;
  d!: Event ;
  iduser:number =1
  eventt: Event = new Event();
  products! : Event[];
  comment:EventComment = new EventComment();
  files: any = [];
  id!: number;
  sttr: string = '0';
  user: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;

  constructor( public eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.eventById();
    });
    const routeParams = this.route.snapshot.paramMap; //getting id from the route
    const eventIdFromRoute = Number(routeParams.get('id')); //stocking the event into this variable
    this.eventService.getEventById(eventIdFromRoute).subscribe(data => {
      this.event = data
           
    }

      );
     //this.getProductImages();
     
    this.getAllProd();
    
  }
  particip(eventId:number,userId:number){
    this.eventService.participant(eventId,userId).subscribe((d)=>{
      console.log(d)
    })
  }
  eventById() {
    const routeParams = this.route.snapshot.paramMap; //getting id from the route
    const eventIdFromRoute = Number(routeParams.get('id')); //stocking the event into this variable
    this.eventService.getEventById(eventIdFromRoute).subscribe((data) => {
      this.event = data;
      this.eventt = data;
    });
  }
  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.eventService.getImagesByEvent(this.id).subscribe((data) => {
      this.files = data;
    });
  }
  getAllProd(){
    this.eventService.getEventList().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    } );
  }
}
