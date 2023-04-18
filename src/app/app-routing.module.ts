import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorieComponent } from './admin/add-categorieEvent/add-categorie.component';
import { CategorieEventsComponent } from './admin/list-categorieEvents/categorie-events.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { ListEventComponent } from './admin/list-event/list-event.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';

const routes: Routes = [ {path: 'addCategory', component: AddCategorieComponent},
{path: 'listCategory', component: CategorieEventsComponent},


{path: 'add', component: AddEventComponent},
   { path: 'listProduct', component: ListEventComponent },
   {path: 'admin', component: DashbordComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
