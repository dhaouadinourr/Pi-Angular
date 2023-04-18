import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieEvent } from 'src/app/Models/categorie-event';
import { CategeventService } from 'src/app/services/categevent.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css',
    '../../../assets/back/css/bootstrap.min.css',
    '../../../assets/back/css/paper-dashboard.css',
    '../../../assets/back/demo/demo.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AddCategorieComponent implements OnInit {
  category: CategorieEvent = new CategorieEvent();


  constructor(private categoryService: CategeventService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addCategory(): void {
    this.categoryService.addCategEvent(this.category).subscribe(() => {
      this.router.navigate(['/listCategory']);
    });
  }
}
