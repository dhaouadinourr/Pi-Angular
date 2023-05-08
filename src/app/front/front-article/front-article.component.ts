import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-front-article',
  templateUrl: './front-article.component.html',
  styleUrls: ['./front-article.component.css',
  '../../../assets/front/css/testimonial.css' ,
  '../../../assets/front/css/styles.css',
  '../../../assets/front/css/font-awesome.min.css',
  '../../../assets/front/css/demo.css',
  '../../../assets/front/css/bootstrap.min.css']
})
export class FrontArticleComponent implements OnInit {

  listArticles!: Article[];
  article!: Article;
  articlee: Array<Article> =  [];
  errorMessage: string = '';
  userFile: any;


 
  article$: Observable<Article> | undefined;


  constructor(public as: ArticleService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.as.getArticles().subscribe({
      next: (data)=>this.listArticles=data,
      error: (error)=> console.log('error'),
      complete: ()=>console.log("kamalt")
    })
  }
  
  getArticles(){
    this.as.getArticles().subscribe( res => this.listArticles = res)
  }

}
