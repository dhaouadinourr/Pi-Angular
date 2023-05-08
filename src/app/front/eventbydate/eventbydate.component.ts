import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventbydate',
  templateUrl: './eventbydate.component.html',
  styleUrls: ['./eventbydate.component.css']
})
export class EventbydateComponent implements OnInit {

  events: Event[] = [];
  files: any = [];
  id!: number;
  @Input() ev!:Event[]
  //@Output() rate = new EventEmitter<any>();
  inp!:any
  inp2!:any
  constructor(
    public eventService: EventService,
    private route: ActivatedRoute,
  
  ) { }

  ngOnInit(): void {
    this.getEventByDate
  }

  getEventByDate(inp:any,inp2:any) {
    this.id = this.route.snapshot.params['id'];
    this.eventService.search(this.inp,this.inp2).subscribe((data) => {
      console.log(data);
      this.ev = data;
      
    });
  }
  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.eventService.getImagesByEvent(this.id).subscribe((data) => {
      this.files = data;
    });
  }
 
}
