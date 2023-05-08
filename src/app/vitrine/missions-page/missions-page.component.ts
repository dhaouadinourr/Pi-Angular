import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mymission } from 'src/app/Models/Mymission';
import { Competence } from 'src/app/Models/competence';
import { User } from 'src/app/Models/user';
import { CompetenceService } from 'src/app/services/competence.service';
import { MymissionService } from 'src/app/services/mymission.service';

@Component({
  selector: 'app-missions-page',
  templateUrl: './missions-page.component.html',
  styleUrls: ['./missions-page.component.css',
  '../../../assets/front/css/testimonial.css',
  '../../../assets/front/css/styles.css',
  '../../../assets/front/css/font-awesome.min.css' ,
  '../../../assets/front/css/demo.css',
  '../../../assets/front/css/bootstrap.min.css',]
})
export class MissionsPageComponent implements OnInit {

  mission:Mymission = new Mymission();
  missionList:any[]=[]
  user!:User
  comptList:any[]=[]

  userToken!:any
  userC!:boolean

  openParticpateModal:boolean = false;

  nbPlacesUsed:any

  idMiss :any

  Username!:any

  FullMission !:boolean
  
  constructor(
    private _missionService : MymissionService,
    private _router : Router,
    private _cmt:CompetenceService,
  ) { }

  ngOnInit(): void {
    this._missionService.getAllMissions().subscribe((res:any)=>{
      this.missionList = res.body    
      this.comptList = res.body.competences
      console.log(res.body.competences)
      console.log(this.missionList)
    })
    this.userToken = localStorage.getItem('adminToken')
      if( this.userToken){this.userC=true}
      else{this.userC=false}
      console.log(this.userToken)
  }

  getCompetenceForMission(id:any){
    this._missionService.getCompetenceForMission(id).subscribe((data:any)=>{
      this.comptList=data.body
      console.log(data.body)
    })
  }
  
  getNbPlaces(idM : any) {
   this._missionService.getNbPlaces(idM).subscribe((res:any)=>{
    this.nbPlacesUsed = res.body
    console.log(res.body)
   })
  }

  openModal(id :any){
    this.openParticpateModal = !this.openParticpateModal;
    this.idMiss =id
    localStorage.setItem('idMissionPar',this.idMiss)
  }

  closeModalParticpate($event : any) : void{
    this.openParticpateModal = $event
  }

  verifyNbPlaces(id:any) {
    this._missionService.verifyNbPlaces(id).subscribe((res:any)=>{      
      this.FullMission = res.body
      console.log(res.body)
    })
  }

  logOut() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('role');
    this._router.navigate(['login']);
  }

}
