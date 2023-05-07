import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mymission } from 'src/app/Models/Mymission';
import { Competence } from 'src/app/Models/competence';
import { CompetenceService } from 'src/app/services/competence.service';
import { MymissionService } from 'src/app/services/mymission.service';
@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css',
  '../../../../assets/back/css/bootstrap.min.css',
  
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/paper-dashboard.css']
})
export class AddMissionComponent implements OnInit {

 idMissionForm!:any

 openParticpateModal:boolean = false;

  hideForm = false;
  mission : Mymission = new Mymission()
  competenceList: Competence[]=[]
  idMiss : any
  
  myValues: Competence[] = [];
  
  selectedCompetence:Competence[]=[];

  showMission = true;
  showCompetence = false;;

  constructor(
    private _missionService : MymissionService,
    private _router : Router,
    private _cmptService : CompetenceService
  ) {
  }

  ngOnInit(): void {
    this._cmptService.getAll().subscribe((res:any)=>{
      this.competenceList = res.body
    })
  }

  addMission(){
    this.showCompetence = !this.showCompetence
    this._missionService.addMission(this.mission).subscribe((res:any)=>{
      this.mission = res.body
      this.idMissionForm=res.body.id      
      console.log(this.idMissionForm)
      localStorage.setItem('idMissionForm',this.idMissionForm);
  })
  //console.log(this.mission)
  //console.log(this.idMissionForm)
  }

  executeMission(){
    this.addMission();
    this.openModal();
  }

  selectCompetence(competence: any) {      
      this.selectedCompetence.push(competence.id);
      this.myValues =this.selectedCompetence
  }

  affectCompetenceToMission(){
    this._missionService.affectCompToMiss(this.idMissionForm,this.myValues).subscribe((data:any)=>{
      //console.log(data)
      this.refresh();
    })
  }

  refresh(): void {
    window.location.reload();
  }

  openModal(){
    this.openParticpateModal = !this.openParticpateModal;
  }

  closeModalParticpate($event : any) : void{
    this.openParticpateModal = $event
  }


}
