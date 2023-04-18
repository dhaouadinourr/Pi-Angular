import { Component, OnInit } from '@angular/core';
import { CategorieEvent } from 'src/app/Models/categorie-event';
import { CategeventService } from 'src/app/services/categevent.service';

@Component({
  selector: 'app-categorie-events',
  templateUrl: './categorie-events.component.html',
  styleUrls: ['./categorie-events.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css'
  ]
})
export class CategorieEventsComponent implements OnInit {
  listCategory : Array<CategorieEvent >=[];
  selectedCategory =null;
  constructor(private categoryService:CategeventService) { }

  ngOnInit(): void {
    return this.getAllCategories();
  }
  getAllCategories(): void {
    this.categoryService.getCategEventList().subscribe((data:CategorieEvent[])=>{
      this.listCategory=data;
    })
}

}