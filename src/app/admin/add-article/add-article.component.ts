import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleComponent } from '../article/article.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css']
})
export class AddArticleComponent implements OnInit {

  article!: Article;
  listArticles!: Article[];
  selectedFiles!: FileList;
  images: string[] = [];
  file!: string;
  public imagePath: any;
  imgURL: any;
  files: string[] = [];
  articlee: Article = new Article();
  constructor( public as:ArticleService,
    private fb: FormBuilder,
    private router: Router) { }
  
  ngOnInit(): void {
    this.infoForm();
  }

  infoForm() {
    this.as.dataForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
    });

}
  getArticles(){
    this.as.getArticles().subscribe( res => this.listArticles = res)
  }
  addArticle(){
    const formData = new FormData();
    const article = this.as.dataForm.value;
    console.log(article)
    console.log("==========")
    // formData.append('article', JSON.stringify(product));
    formData.append('article', JSON.stringify(article));


    for (let i = 0; i < this.files.length; i++) {
      formData.append('files', this.files[i]);
      console.log(formData);
    }

    // formData.append('file', this.userFile);
    formData.append('file', this.file);
    this.as.addArticle(formData).subscribe((data) => {
      this.router.navigate(['/Article']);
    });
  }

onSelectFile(articlee: any) {
  if (articlee.target.files.length > 0) {
    const file = articlee.target.files[0];
    for (var i = 0; i < articlee.target.files.length; i++) {
      this.files.push(articlee.target.files[i]);
    }

    var mimeType = articlee.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {

      return;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (articlee) => {
      this.imgURL = reader.result;
    };
  }
}
onSelectFirstFile(articlee: any) {
  if (articlee.target.files.length > 0) {
    const file = articlee.target.files[0];
    this.file = file;
    // this.f['profile'].setValue(file);

    var mimeType = articlee.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {

      return;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_article) => {
      this.imgURL = reader.result;
    };
  }
}
}
