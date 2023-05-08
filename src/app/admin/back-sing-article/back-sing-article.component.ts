import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back-sing-article',
  templateUrl: './back-sing-article.component.html',
  styleUrls: ['./back-sing-article.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css']
})
export class BackSingArticleComponent implements OnInit {
article!: Article;
id!:number;
  constructor( public as : ArticleService,
    private v:ActivatedRoute,
    private router:Router
                ) { }

  ngOnInit(): void {
    this.id=this.v.snapshot.params['id']
    this.as.getArticle(this.id).subscribe((res:Article)=>{
      this.article=res;
    },
    (error) => {
        console.log(error);
    },
    () => {
      // complete.
  });
  
  }

}
