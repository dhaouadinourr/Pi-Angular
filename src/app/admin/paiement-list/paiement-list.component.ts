import { Component, OnInit } from '@angular/core';
import { Paiement } from 'src/app/Models/paiement';
import { DonationFormService } from 'src/app/services/donation-form.service';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class PaiementListComponent implements OnInit {
  listPaiement !:Paiement[];
  selectedPaiement =null;
  x:number =1 ; 
  constructor(private paiementService:DonationFormService) { }

  ngOnInit(): void {
    return this.getAllPaiements();
  }
  getAllPaiements(){
    this.paiementService.getPaiements().subscribe(res => this.listPaiement =res)
}
remove(id: number):void {
  this.paiementService. deletePaiement(id).subscribe(()=>  (this.listPaiement=this.listPaiement.filter((t)=>t.id !==id)));
}
}
