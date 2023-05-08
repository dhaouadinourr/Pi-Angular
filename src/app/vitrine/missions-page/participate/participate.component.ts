import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MymissionService } from 'src/app/services/mymission.service';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {

  @Input() modalParticipate : boolean= true
  @Output() closeModalParticipate =new EventEmitter<boolean>(); 

  Username!:any

  idMiss!:any

  FullMission !:boolean

  constructor(
    private _missionService : MymissionService
  ) { }

  ngOnInit(): void {
    this.Username=localStorage.getItem('username') ;   
    this.idMiss=localStorage.getItem('idMissionPar') ;
    this.verifyNbPlaces();
    console.log(this.idMiss)
    console.log(this.Username)
  }

  
  close(){
    this.modalParticipate = false
  }

  refresh(): void {
    window.location.reload();
  }

  participateToMission(){
    this._missionService.participateToMission(this.idMiss,this.Username).subscribe((res:any)=>{
      console.log(res.body)
      this.refresh();
    })
  }

  verifyNbPlaces() {
    this._missionService.verifyNbPlaces(this.idMiss).subscribe((res:any)=>{      
      this.FullMission = res.body
      console.log(res.body)
    })
  }



}
