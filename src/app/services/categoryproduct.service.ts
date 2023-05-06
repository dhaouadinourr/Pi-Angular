import { Injectable } from '@angular/core';
import { Categoryproduct } from '../Models/categoryproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryproductService {

  private baseUrl = "http://localhost:9090/produitCategorie"
  constructor(private httpClient:HttpClient) { }

  
  getProductCategories(): Observable<Categoryproduct[]> {
    return this.httpClient.get<Categoryproduct[]>(this.baseUrl + '/getAll');
  }
  getCategoryById(id: number): Observable<Categoryproduct> {
    return this.httpClient.get<Categoryproduct>(`${this.baseUrl}/get/` + id);
  }
  
  addCategorie(category: Categoryproduct): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/add', category);
  }

  updateCategorie(
    category: Categoryproduct,
    id: number
  ): Observable<Categoryproduct> {
    return this.httpClient.put<Categoryproduct>(
      this.baseUrl + '/update/' + id,
      category
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/delete/' + id);
  }

  getCategoryByProduct(id: number): Observable<Categoryproduct[]> {
    return this.httpClient.get<Categoryproduct[]>(
      this.baseUrl + '/category/' + id
    );
  }
}