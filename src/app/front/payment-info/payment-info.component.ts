import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, FormControl} from '@angular/forms';
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

  checkoutFormGroup!: FormGroup;
  paymentInfo: PaymentInfo = new PaymentInfo();

  constructor(private formBuilder:FormBuilder,private paymentService: PaymentInfoService,
    private router: Router) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
        paymentt:this.formBuilder.group({
          amount:new FormControl('',[Validators.required, Validators.max(999999), Validators.pattern('-?[0-9]+(\.[0-9][0-9]?)?')]),
          currency:new FormControl('',[Validators.required, Validators.maxLength(3),Validators.minLength(2)]),
          receiptEmail:new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z@0-9.-]+\\.[a-z]{2,4}$')]),

        })
    });

  }

  onSubmit() {
    console.log("Handling the submit button"); 
    if (this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();
    }
      console.log(this.checkoutFormGroup.get('paymentt')?.value);
  }
  addPayment(): void {
    this.paymentService.createPaymentIntent(this.paymentInfo).subscribe(() => {
      this.router.navigate(['/thanks']);
    });
  }
  get amount(){ return this.checkoutFormGroup.get('paymentt.amount'); }
  get  currency(){ return this.checkoutFormGroup.get('paymentt.currency'); }
  get receiptEmail(){ return this.checkoutFormGroup.get('paymentt.receiptEmail'); }



}
