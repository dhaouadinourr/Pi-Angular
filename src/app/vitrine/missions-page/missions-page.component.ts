import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mymission } from 'src/app/Models/Mymission';
import { User } from 'src/app/Models/user';
import { MymissionService } from 'src/app/services/mymission.service';

@Component({
  selector: 'app-missions-page',
  templateUrl: './missions-page.component.html',
  styleUrls: ['./missions-page.component.css']
})
export class MissionsPageComponent implements OnInit {

  mission:Mymission = new Mymission();
  missionList:Mymission[]=[]
  user!:User

  openParticpateModal:boolean = false;

  nbPlacesUsed:any

  idMiss :any

  Username!:any
  
  constructor(
    private _missionService : MymissionService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._missionService.getAllMissions().subscribe((res:any)=>{
      this.missionList = res.body
      console.log(this.missionList)
    })
    this.Username=localStorage.getItem('username')    
    console.log(this.Username)
  }

  participateToMission(id:any ){
    this._missionService.participateToMission(id,this.Username).subscribe((res:any)=>{
      console.log(res.body)
      
    })
  }
  getNbPlaces(idM : any) {
   this._missionService.getNbPlaces(idM).subscribe((res:any)=>{
    this.nbPlacesUsed = res.body
    console.log(res.body)
   })
  }

  openModal(){
    this.openParticpateModal = !this.openParticpateModal;
  }

  closeModalParticpate($event : any) : void{
    this.openParticpateModal = $event
  }

}
