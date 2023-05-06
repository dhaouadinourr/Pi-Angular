import { Component, Input, OnInit } from '@angular/core';
import { CategorieEvent } from 'src/app/Models/categorie-event';
import { Event } from 'src/app/Models/event';
import { CategeventService } from 'src/app/services/categevent.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-categoryevent',
  templateUrl: './categoryevent.component.html',
  styleUrls: ['./categoryevent.component.css']
})
export class CategoryeventComponent implements OnInit {

  categories!: CategorieEvent[];
  @Input() events!: Event[];

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

  showEventByCategory(id: number){

    this.getEventByCategory(id);
    console.log(this.events);
  }

}
