import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/event';
import { EventComment } from 'src/app/Models/event-comment';
import { User } from 'src/app/Models/user';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  edit = false;
  c2!: EventComment;
  bad = false;
  str!: string;
  ev!:Event
  eventIdFromRoute!: number
  j!: number;
  u: User = new User();
  @Input() produit!: Event;

  constructor(public eventService: EventService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.produit);
    console.log(this.produit.comments)
    const routeParams = this.route.snapshot.paramMap; //getting id from the route
    this.eventIdFromRoute = Number(routeParams.get('id')); //stocking the event into this variable
    this.eventService.getEventById(this.eventIdFromRoute).subscribe((d)=>{
      this.ev=d
    });

  }

  eventEdit(i: number) {
    this.edit = true;
    this.j = i;
  }

  deleteCom(c: EventComment) {
    this.eventService.deleteCom(c.idCommentaire).subscribe(
      (data) => {
        this.getProdById(this.produit.id_event);
      },
      (error) => {}
    );
    this.edit = false;
  }

  likeModifyCom(c : EventComment, prod : Event) {
    this.bad = false;
    c.likes = c.likes + 1;
    this.eventService.getByIDCom(c.idCommentaire).subscribe((data) => {
      this.c2 = data;
      this.c2.likes = c.likes;
      this.c2.events = prod;
      this.eventService.modifyCom(this.c2).subscribe(
        (data) => {},
        (error) => {}
      );
    });

    this.edit = false;
  }

  modifyCom(c : EventComment,prod :Event){
    this.bad=false;
    this.eventService.getByIDCom(c.idCommentaire).subscribe(
      (data) =>{this.c2=data;this.c2.comment=c.comment;this.c2.events=prod;
        this.eventService.modifyCom(this.c2).subscribe(
          (data) =>{},
          (error) =>{if(error.status==406){alert("bad Word")}}

        )
      }
    );

    this.edit=false;

  }

  addCom(prod: Event) {
    let c3 = new EventComment();
    c3.idClient = 1 ;
    //aModifier
    c3.comment = this.str;
    c3.likes = 0;
    c3.events=this.ev;
    this.bad = false;
    console.log(c3);
    this.eventService.addCom(c3).subscribe(
      (data) => {
        console.log(c3);
        this.getProdById(this.ev.id_event);
      },
      (error) => {
        if (error.status == 500) {
          alert('Empty  Comment');
        } else if (error.status == 406) {
          alert('Bad  Word');
        } else if (error.status == 404) {
          alert('Duplicated');
        }
      },
      () => {}
    );

    this.edit = false;
    this.str = '';
  }

  getProdById(id: any) {
    this.eventService.getEventById(id).subscribe((data) => {
      this.produit = data;
    });
  }

  getCommentUser(id: any) {
    this.eventService.getByIDComUser(1).subscribe((data) => {
      this.u = data;
      console.log(data)
    });
  }
}
export class ButtonOverviewExample {}