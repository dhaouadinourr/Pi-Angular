import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Models/product';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:9090/produit';
  product: Produit = new Produit();

  public dataForm!: FormGroup;

  constructor(private httpClient: HttpClient) {}
  storageUserAsStr: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;

  getProductList(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.baseUrl + '/getAll');
  }
  getProductById(id: number): Observable<Produit> {
    return this.httpClient.get<Produit>(`${this.baseUrl}/get/` + id);
  }

  addTask(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/add', formData);
  }

  updateTask(formData: FormData): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/update', formData);
  }
  deleteProduct(product: Produit): Observable<Produit> {
    const url = `${this.baseUrl}/delete/${product.Id_produit}`;
    return this.httpClient.delete<Produit>(url);
  }

  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  getImagesByProducts(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + '/images/' + id);
  }
  getProductByCategory(id: number): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.baseUrl + '/catproducts/' + id);
  }

 





  


}
