import { Component, OnInit } from '@angular/core';
import { Categoryproduct } from 'src/app/Models/categoryproduct';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class ListcategoryComponent implements OnInit {


  listCategory : Array<Categoryproduct>=[];
  selectedCategory =null;
  constructor(private categoryService:CategoryproductService) { }

  ngOnInit(): void {
    return this.getAllCategories();
  }
  getAllCategories(): void {
    this.categoryService.getProductCategories().subscribe((data:Categoryproduct[])=>{
      this.listCategory=data;
    })
  }
 

  remove(id: number):void {
    this.categoryService.deleteCategory(id).subscribe(()=>  (this.listCategory=this.listCategory.filter((t)=>t.id !==id)));
}



}
