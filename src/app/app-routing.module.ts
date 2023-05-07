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
import { ListUserComponent } from './admin/list-user/list-user.component';
import { EditUserComponent } from './admin/list-user/edit-user/edit-user.component';
import { AuthGuard } from './_guard/auth.guard';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ForgetPasswordComponent } from './admin/login/forget-password/forget-password.component';
import { ResetPasswordComponent } from './admin/login/reset-password/reset-password.component';
import { LoginFComponent } from './vitrine/login-f/login-f.component';
import { SignupFComponent } from './vitrine/signup-f/signup-f.component';
import { CompetenceComponent } from './admin/competence/competence.component';
import { AddCompetenceComponent } from './admin/competence/add-competence/add-competence.component';
import { EditCompetenceComponent } from './admin/competence/edit-competence/edit-competence.component';
import { MissionComponent } from './admin/mission/mission.component';
import { AddMissionComponent } from './admin/mission/add-mission/add-mission.component';
import { EditMissionComponent } from './admin/mission/edit-mission/edit-mission.component';
import { DetailsMissionComponent } from './admin/mission/details-mission/details-mission.component';
import { MissionsPageComponent } from './vitrine/missions-page/missions-page.component';

const routes: Routes = [ 
  {path : '', component:HeaderComponent},

  {path: 'event', component: EventsComponent},
 
{path: 'addCategory', component: AddCategorieComponent},
{path: 'listCategory', component: CategorieEventsComponent},
{path:'admin',component: DashbordComponent},
{path: 'addEvent', component: AddEventComponent},
   { path: 'listEvent', component: ListEventComponent },
   { path: 'updateEvent/:id', component: EditeEventComponent},
   {path: 'admin/login', component: LoginComponent},
   {path: 'admin/signup', component: SignupComponent},
   {path: 'admin/forgotpassword' , component:ForgetPasswordComponent},
   {path: 'admin/resetpassword' , component:ResetPasswordComponent},
   {path: 'login', component: LoginFComponent},
   {path: 'signup', component: SignupFComponent},
   {path:'admin/users',component:AdminLayoutComponent , canActivate: [AuthGuard] ,children:[
    {
      path:'',
      component:ListUserComponent
    },
    {
      path: 'edit/:id',
      component: EditUserComponent
    }
   ]},
 {
  path: 'admin/competence', component: AdminLayoutComponent,
  children :[
    {
      path:'' ,
      component : CompetenceComponent 
      },
      {
        path:'add',
        component : AddCompetenceComponent
      },
      {
        path:'edit/:id',
        component: EditCompetenceComponent
      }
  ]
  },
  { 
    path: 'admin/mission', component: AdminLayoutComponent,
    children :[
      {
      path:'' ,
      component : MissionComponent 
      },
      {
        path:'add',
        component : AddMissionComponent
      },
      {
        path:'edit/:id',
        component:EditMissionComponent
      },
      {
        path:'details/:id',
        component:DetailsMissionComponent
      }
    ]
   },
   {path:'mission',component:MissionsPageComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
