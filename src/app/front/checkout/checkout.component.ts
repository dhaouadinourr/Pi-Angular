import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { group } from 'console';
import { DonationFormService } from 'src/app/services/donation-form.service';
import { Router } from '@angular/router';
import { Paiement } from 'src/app/Models/paiement';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;
  donation: Paiement = new Paiement();
  constructor(private formBuilder:FormBuilder,private paiement: DonationFormService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
        customer:this.formBuilder.group({
          datePaiemenet:['', [Validators.required]],
          montant:['', [Validators.required]],
          firstName:['', [Validators.required]],
          lastName:['', [Validators.required]],
          Email:['', [Validators.required]],

        })
    });
  }
  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.checkoutFormGroup.get('customer')?.value);
   // console.log("the Amount is "+this.checkoutFormGroup.get('customer')?.value.Amount);
  
  }


}
