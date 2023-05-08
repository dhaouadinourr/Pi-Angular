import { Injectable } from '@angular/core';
import { Paiement } from '../Models/paiement';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DonationFormService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:9090/checkout';
  donation: Paiement = new Paiement();

  public dataForm!: FormGroup;

  createPaymentIntent(donation: Paiement): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/add', donation);
  }
  getPaiements(): Observable<Paiement[]> {
    return this.httpClient.get<Paiement[]>(this.baseUrl + '/getAll');
  }
  getPaiementById(id: number): Observable<Paiement> {
    return this.httpClient.get<Paiement>(`${this.baseUrl}/get/` + id);
  }

  updatePaiement(donation: Paiement): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/update', donation);
  }
  deletePaiement(id : number): Observable<any> {
return this.httpClient.delete(this.baseUrl + '/delete/' + id);
} 
}
