
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoryproduct } from 'src/app/Models/categoryproduct';
import { Produit } from 'src/app/Models/product';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddproductComponent implements OnInit {

  files: string[] = [];
  selectedFiles!: FileList;
  images: string[] = [];
  product: Produit = new Produit();
  categories!: Categoryproduct[];
  errorMessage: string = '';
  userFile: any;
  file!: string;
  public imagePath: any;
  imgURL: any;

  constructor(
    public productService: ProductService,
    private router: Router,
    private categoryProductService: CategoryproductService,

    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryProductService.getProductCategories().subscribe((data) => {
      this.categories = data;
    });
    this.infoForm();
  }

  infoForm() {
    this.productService.dataForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      prix: [0, [Validators.required]],
      quantity: [0, [Validators.required]],
      produitCategory: ['', [Validators.required]],
    });
  }

  addProduct() {
    const formData = new FormData();

    const product = this.productService.dataForm.value;
    // formData.append('article', JSON.stringify(product));
    formData.append('product', JSON.stringify(product));


    // formData.append('file', this.userFile);
    formData.append('file', this.file);
    this.productService.addTask(formData).subscribe((data) => {
      this.router.navigate(['/listProduct']);
    });
  }

  setNewCategory(category: Categoryproduct): void {
    console.log(category);
    this.productService.dataForm.value.category = category;
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      for (var i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i]);
      }

      var mimeType = event.target.files[0].type;
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
  onSelectFirstFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
}

