import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class ListproductComponent implements OnInit {

  productList: Array<Produit> = [];


  p: number=1;
  constructor(public productService: ProductService) {}
  ngOnInit(): void {
    return this.getProducts();
  }
  getProducts(): void {
    this.productService.getProductList().subscribe((data: Produit[]) => {
      this.productList = data;
    });
  }
  
  onDelete(product: Produit) {
    this.productService
      .deleteProduct(product)
      .subscribe(
        () =>
          (this.productList = this.productList.filter(
            (t) => t.Id_produit !== product.Id_produit
          ))
      );
  }
  }
  
  