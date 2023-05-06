import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoryproduct } from 'src/app/Models/categoryproduct';
import { Produit } from 'src/app/Models/product';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id!: number;
  selectedFiles!: FileList;
  product: Produit = new Produit();
  categories!: Categoryproduct[];
  errorMessage: string = '';
  userFile: any;
  public imagePath: any;
  imgURL: any;
  files: string[] = [];
  images: string[] = [];
  file!: string;

  constructor(public productService: ProductService ,
    private router: Router,
    private categoryProductService: CategoryproductService,
  
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.productService.getProductById(this.id).subscribe((data) => {
        this.product = data;
      });
      this.categoryProductService.getProductCategories().subscribe((data) => {
        this.categories = data;
      });
      this.infoForm();
      console.log(this.product);
    }
  
    infoForm() {
      this.productService.dataForm = this.fb.group({
        nom: [this.product.nom, [Validators.required]],
        description: [this.product.description, [Validators.required]],
        prix: [this.product.prix, [Validators.required]],
        quantity: [this.product.quantity, [Validators.required]],
        produitCategory: [this.product.produitCategory, [Validators.required]],
      });
    }
  
    addProduct() {
      const formData = new FormData();
  
      const product = this.productService.dataForm.value;
      // formData.append('article', JSON.stringify(product));
      formData.append('product', JSON.stringify(product));
  
      for (let i = 0; i < this.files.length; i++) {
        formData.append('files', this.files[i]);
        console.log(formData);
      }
  
      // formData.append('file', this.userFile);
      formData.append('file', this.file);
      this.productService.updateTask(formData).subscribe((data) => {
        this.router.navigate(['/admin/listProduct']);
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