import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/Models/article';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public apiUrl = 'http://localhost:9090/article';
  public dataForm!: FormGroup;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + '/getAll');
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.apiUrl}/get/${id}`;
    return this.http.get<Article>(url);
  }

  addArticle(formData: FormData): Observable<Article> {
    return this.http.post<Article>(this.apiUrl + '/add', formData);
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.apiUrl}/update/${article.id}`;
    return this.http.put<Article>(url, article);
  }

  deleteArticle(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<Article>(url);
  }
  etoile(id: number, clientid: number, rev: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + '/add-etoile/' +id+ '/' + clientid + '/' + rev
    );
  }
  
}
