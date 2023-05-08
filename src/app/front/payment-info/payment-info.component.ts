import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentInfo } from 'src/app/Models/payment-info';
import { PaymentInfoService } from 'src/app/services/payment-info.service';
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
          amount:['', [Validators.required]],
          currency:['', [Validators.required]],
          receiptEmail:['', [Validators.required]],

        })
    });
  }
  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.checkoutFormGroup.get('paymentt')?.value);
  }
  addPayment(): void {
    this.paymentService.addPaymentInfo(this.paymentInfo).subscribe(() => {
      this.router.navigate(['/thanks']);
    });
  }

}
