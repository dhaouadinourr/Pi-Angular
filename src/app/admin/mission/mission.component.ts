import { Component, Input, OnInit } from '@angular/core';
import { Mymission } from 'src/app/Models/Mymission';
import { MymissionService } from 'src/app/services/mymission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css',
  '../../../assets/back/css/bootstrap.min.css',
  
  '../../../assets/back/demo/demo.css',
  '../../../assets/back/css/paper-dashboard.css']
})
export class MissionComponent implements OnInit {

  MissionList:Mymission [] = []
  @Input() getMissionId : any

  filteredTableData : Mymission[]=[]
  searchQuery : string = '';
  tableData: Mymission []=[]

  editMissionModal:boolean = false;

  constructor(
    private _missionService:MymissionService
  ) { }

  ngOnInit(): void {
    this._missionService.getAllMissions().subscribe((res:any) =>{
      this.MissionList = res.body
    })
  }

  deleteMission(id:any) {
    this._missionService.deleteMission(id).subscribe({
      next:()=>this.MissionList=this.MissionList.filter((p)=>p.id!=id)
    })
  }

  filterTableData() {
    this.filteredTableData = this.tableData.filter(data => {
      console.log(data)
      return data.title?.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
}
