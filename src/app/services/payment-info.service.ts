import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { PaymentInfo } from '../Models/payment-info';
@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:9090/paymentIntent';
  paymentInfo: PaymentInfo = new PaymentInfo();
  public dataForm!: FormGroup;

  addPaymentInfo(payment: PaymentInfo): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/add', payment);
  }
/*   getPaymentInfos(): Observable<PaymentInfo[]> {
    return this.httpClient.get<PaymentInfo[]>(this.baseUrl + '/getAll');
  }
  getPaymentInfoById(id: number): Observable<PaymentInfo> {
    return this.httpClient.get<PaymentInfo>(`${this.baseUrl}/get/` + id);
  } 
  updatePaiement(donation: PaymentInfo): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/update', donation);
  }
  deletePaiement(paiement : Pay): Observable<any> {
return this.httpClient.delete(this.baseUrl + '/delete/' + paiement.Id_paiment);
} */
}
