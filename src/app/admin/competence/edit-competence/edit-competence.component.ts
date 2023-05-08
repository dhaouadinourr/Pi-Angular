import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from 'src/app/Models/competence';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css',
  '../../../../assets/back/css/bootstrap.min.css',
  
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/paper-dashboard.css'
]
})
export class EditCompetenceComponent implements OnInit {

  competence:Competence = new Competence()
  path: any = false;
  competenceId!: any


  constructor(
    private _cmptService : CompetenceService,
    private _router : Router,
    private v:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.competenceId=this.v.snapshot.params['id']
    this._cmptService.getById(this.competenceId).subscribe((res:any) =>{
      this.competence = res.body
    })
  }

  editCompetence(){
    this._cmptService.editCompetence(this.competence).subscribe({
      next :() => this._router.navigateByUrl('/admin/competence'),
      error:(err:any) => console.log(err)
    })
  }

}
