import { Component, Input, Output,OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategorieEvent } from 'src/app/Models/categorie-event';
import { Event } from 'src/app/Models/event';
import { CategeventService } from 'src/app/services/categevent.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-categoryevent',
  templateUrl: './categoryevent.component.html',
  styleUrls: ['./categoryevent.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CategoryeventComponent implements OnInit {

  categories!: CategorieEvent[];
  @Input() events!: Event[];
  @Input()ev!:Event[]
  @Output() rate = new EventEmitter<any>();
  inp!:any
  inp2!:any
  constructor(private categoryEventService: CategeventService,public eventservice:EventService) { }

  ngOnInit(): void {
    this.categoriesProductList();
    
  }
  categoriesProductList() {
    this.categoryEventService.getCategEventList().subscribe(data => {
      this.categories = data
    })
  }
  getEventByCategory(id: number){
    this.eventservice.getEventByCategory(id).subscribe(data => {
      this.events = data
    })
  }
  submit(inp:any,inp2:any){
    console.log(inp)
    console.log(inp2)
    this.rate.emit(inp);
    this.eventservice.search(inp,inp2).subscribe((e)=>{
      this.ev=e
      console.log(e)
    })
  }
  
  showEventByCategory(id: number){

    this.getEventByCategory(id);
    console.log(this.events);
  }

}
