import { Paiement } from 'src/app/Models/paiement';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DonationFormService } from 'src/app/services/donation-form.service';
@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css','../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/css/paper-dashboard.css',
  '../../../assets/back/demo/demo.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AddDonationComponent implements OnInit {
  donation: Paiement = new Paiement();
  constructor(private paiementService: DonationFormService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addDonation(): void {
    this.paiementService.createPaymentIntent(this.donation).subscribe(() => {
      this.router.navigate(['/paiementList']);
    });
  }
}
