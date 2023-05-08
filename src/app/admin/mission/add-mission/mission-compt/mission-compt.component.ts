import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Competence } from 'src/app/Models/competence';
import { CompetenceService } from 'src/app/services/competence.service';
import { MymissionService } from 'src/app/services/mymission.service';

@Component({
  selector: 'app-mission-compt',
  templateUrl: './mission-compt.component.html',
  styleUrls: ['./mission-compt.component.css']
})
export class MissionComptComponent implements OnInit {

  competenceList: Competence[]=[]
  idMissionForm!:any
  myValues: Competence[] = [];

  selectedCompetence:Competence[]=[];
  

  @Input() modalParticipate : boolean= true
  @Input() idMissionForComp !: number
  @Output() closeModalParticipate =new EventEmitter<boolean>(); 

  constructor(
    private _cmptService : CompetenceService,
    private _missionService : MymissionService
  ) { }

  ngOnInit(): void {
    this._cmptService.getAll().subscribe((res:any)=>{
      this.competenceList = res.body
    })
    this.idMissionForm = localStorage.getItem('idMissionForm') ;
    console.log(this.idMissionForm)
  }

  close(){
    this.modalParticipate = false
  }

  refresh(): void {
    window.location.reload();
  }

  affectCompetenceToMission(){
    let idMission = parseInt(this.idMissionForm)
    idMission = idMission+1 ;
    this._missionService.affectCompToMiss(idMission,this.myValues).subscribe((data:any)=>{
      console.log(data)
      this.refresh();
    })
  }

  selectCompetence(competence: any) {      
    this.selectedCompetence.push(competence.id);
    this.myValues =this.selectedCompetence
    console.log(this.myValues)
}


}
