import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css',
  '../../../assets/front/css/testimonial.css' ,
  '../../../assets/front/css/styles.css',
  '../../../assets/front/css/font-awesome.min.css',
  '../../../assets/front/css/demo.css',
  '../../../assets/front/css/bootstrap.min.css',
  ]
})
export class SingleArticleComponent implements OnInit {
   listArticles!: Article[];
  article!: Article;
  comment!: Comment;
  id!:number;
  article$: Observable<Article> | undefined;
  image!: Data;
  imageToShow: any;
  isImageLoading!: boolean;
  constructor(private as: ArticleService,private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.as.getArticle(id).subscribe(
      (receivedPost: Article) => {
          this.article = receivedPost;
          
      },
      (error) => {
          console.log(error);
      },
      () => {
        // complete.
    });
  
  }


}
