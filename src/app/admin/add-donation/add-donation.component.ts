import { Paiement } from 'src/app/Models/paiement';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DonationFormService } from 'src/app/services/donation-form.service';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css','../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AddDonationComponent implements OnInit {
  checkoutFormGroup!: FormGroup;
  donation: Paiement = new Paiement();
  constructor(private formBuilder:FormBuilder,private paiementService: DonationFormService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer:this.formBuilder.group({
        datePaiemenet:['', [Validators.required]],
        montant:new FormControl('',[Validators.required, Validators.max(999999), Validators.pattern('-?[0-9]+(\.[0-9][0-9]?)?')]),
        firstName:new FormControl('',[Validators.required, Validators.minLength(2)]),
        lastName:new FormControl('',[Validators.required, Validators.minLength(2)]),
        Email:new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z@0-9.-]+\\.[a-z]{2,4}$')]),

      })
  });
  }
  addDonation(): void {
    this.paiementService.createPaymentIntent(this.donation).subscribe(() => {
      this.router.navigate(['/paiementList']);
    });
  }
  onSubmit() {
    console.log("Handling the submit button");
    if (this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();
    }
    console.log(this.checkoutFormGroup.get('customer')?.value);
   // console.log("the Amount is "+this.checkoutFormGroup.get('customer')?.value.Amount);
  
  }
  get montant(){ return this.checkoutFormGroup.get('customer.montant'); }
  get lastName(){ return this.checkoutFormGroup.get('customer.lastName'); }
  get firstName(){ return this.checkoutFormGroup.get('customer.firstName'); }
  get Email(){ return this.checkoutFormGroup.get('customer.Email'); }
}
