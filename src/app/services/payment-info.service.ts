import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  HttpClient,
} from '@angular/common/http';
import { PaymentInfo } from '../Models/payment-info';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  constructor(private httpClient: HttpClient) { }
  paymentIntentUrl = environment.apiBaseUrl + '/paymentIntent/add';
  baseUrl = 'http://localhost:9090/paymentIntent';
  paymentInfo: PaymentInfo = new PaymentInfo();
  public dataForm!: FormGroup;

/*   placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchasetUrl, purchase);    
  } */

  createPaymentIntent(payment: PaymentInfo): Observable<any> {
/*     const authToken = this.userservice.getAuthToken();
    const headers = {
        'Authorization': Bearer ${authToken},
        'Content-Type': 'application/json'
    }; 
    const options = { headers: headers };*/
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, payment);
  }
}
