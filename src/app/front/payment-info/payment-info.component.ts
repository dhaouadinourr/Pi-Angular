import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentInfo } from 'src/app/Models/payment-info';
import { PaymentInfoService } from 'src/app/services/payment-info.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  amount!:number;
  currency!:string;
  receiptEmail!:string;
  checkoutFormGroup!: FormGroup;
  paymentInfo: PaymentInfo = new PaymentInfo();

  /* cardElement:any ; 
  displayError:any ="";
  stripe=Stripe(environment.StripePublishableKey); */


  constructor(private formBuilder:FormBuilder,private paymentService: PaymentInfoService,
    private router: Router) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
        paymentt:this.formBuilder.group({
          amount:['', [Validators.required]],
          currency:['', [Validators.required]],
          receiptEmail:['', [Validators.required]],
          
          

        })
    });

  }
  /* setupStripePaymentForm() {
    var elements= this.stripe.elements();

    this.cardElement =elements.create('card',{hidePostalCode:true});

    this.cardElement.mount('#card-element');

    this.cardElement.on('change',(event: any)=> {
      this.displayError = document.getElementById('card-errors');
      if (event.complete){
        this.displayError.textContent ="";
      } else if (event.error){
        this.displayError.textContent=event.error.message ; 
      }
    });
  } */
  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.checkoutFormGroup.get('paymentt')?.value); 
  }
  addPayment(): void {
    this.paymentService.createPaymentIntent(this.paymentInfo).subscribe(() => {
      this.router.navigate(['/thanks']);
    });
  }

}
