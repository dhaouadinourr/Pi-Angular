import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mymission } from 'src/app/Models/Mymission';
import { MymissionService } from 'src/app/services/mymission.service';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css',
  '../../../../assets/back/css/bootstrap.min.css',
  
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/paper-dashboard.css']
})
export class EditMissionComponent implements OnInit {

  mission!:Mymission
  id!:any

  constructor(
    private _missionService:MymissionService,
    private v:ActivatedRoute,
    private _router : Router
  ) { } 

  ngOnInit(): void {
    this.id=this.v.snapshot.params['id']
    this._missionService.getMissionById(this.id).subscribe((res:any)=>{
      this.mission=res.body
    })
  }

  editMission(){
    this._missionService.updateMission(this.mission).subscribe({
      next:()=> this._router.navigateByUrl('/admin/mission'),
      error:(err:any) => console.log(err)
    })
  }

}
