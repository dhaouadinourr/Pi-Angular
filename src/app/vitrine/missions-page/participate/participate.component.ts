import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {

  @Input() modalParticipate : boolean= true
  @Output() closeModalParticipate =new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit(): void {
  }

  
  close(){
    this.closeModalParticipate.emit(this.modalParticipate)
  }

}
