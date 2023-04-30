import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorieComponent } from './admin/add-categorieEvent/add-categorie.component';
import { CategorieEventsComponent } from './admin/list-categorieEvents/categorie-events.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { ListEventComponent } from './admin/list-event/list-event.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { EditeEventComponent } from './admin/edite-event/edite-event.component';
import { EventsComponent } from './front/events/events.component';
import { HeaderComponent } from './front/header/header.component';

const routes: Routes = [ 
  {path : '', component:HeaderComponent},

  {path: 'event', component: EventsComponent},
 
{path: 'addCategory', component: AddCategorieComponent},
{path: 'listCategory', component: CategorieEventsComponent},
{path:'admin',component: DashbordComponent},
{path: 'addEvent', component: AddEventComponent},
   { path: 'listEvent', component: ListEventComponent },
   {path: 'admin', component: DashbordComponent},
   { path: 'updateEvent/:id', component: EditeEventComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
