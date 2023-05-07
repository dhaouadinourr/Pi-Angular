import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from 'src/app/Models/competence';
import { MymissionService } from 'src/app/services/mymission.service';

@Component({
  selector: 'app-details-mission',
  templateUrl: './details-mission.component.html',
  styleUrls: ['./details-mission.component.css',
  '../../../../assets/back/css/bootstrap.min.css',
  
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/paper-dashboard.css']
})
export class DetailsMissionComponent implements OnInit {

  comptList : Competence[]=[]
  idMission : any
  constructor(
    private _missionService : MymissionService,
    private v:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.idMission=this.v.snapshot.params['id']
    this._missionService.getCompetenceForMission(this.idMission).subscribe((res:any)=>{
      this.comptList=res.body
      console.log(res.body)
    })
  }

}
