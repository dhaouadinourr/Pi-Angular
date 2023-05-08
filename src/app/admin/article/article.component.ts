import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css']
})
export class ArticleComponent implements OnInit {

  listArticles!: Article[];
  article!: Article;

  constructor(public as: ArticleService) { }

  ngOnInit(): void {
    return this.getArticles();
  }
  
  getArticles(){
    this.as.getArticles().subscribe( res => this.listArticles = res)
  }

  
  onDelete(id: number) : void {
    this.as
      .deleteArticle(id)
      .subscribe(
        () =>
          (this.listArticles = this.listArticles.filter(
            (t) => t.id !== id
          ))
      );
  }
 

  

}
