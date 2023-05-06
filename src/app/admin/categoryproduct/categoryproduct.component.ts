import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoryproduct } from 'src/app/Models/categoryproduct';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class CategoryproductComponent implements OnInit {

  category: Categoryproduct = new Categoryproduct();

  constructor(
    private categoryService: CategoryproductService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addCategory(): void {
    this.categoryService.addCategorie(this.category).subscribe(() => {
      this.router.navigate(['listCategoryProduct']);
    });
  }
}
