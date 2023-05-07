import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { NavComponent } from './admin/nav/nav.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ListEventsComponent } from './admin/list-events/list-events.component';
import { CategorieEventsComponent } from './admin/list-categorieEvents/categorie-events.component';
import { AddCategorieComponent } from './admin/add-categorieEvent/add-categorie.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEventComponent } from './admin/list-event/list-event.component';
import { EditeEventComponent } from './admin/edite-event/edite-event.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './front/header/header.component';
import { EventsComponent } from './front/events/events.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { EditUserComponent } from './admin/list-user/edit-user/edit-user.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './admin/login/login.component';
import { UsersComponent } from './admin/users/users.component';
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
import { ParticipateComponent } from './vitrine/missions-page/participate/participate.component';
import { MissionComptComponent } from './admin/mission/add-mission/mission-compt/mission-compt.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    NavComponent,
    SidebarComponent,
    ListEventsComponent,
    CategorieEventsComponent,
    AddCategorieComponent,
    AddEventComponent,
    ListEventComponent,
    EditeEventComponent,
    HeaderComponent,
    EventsComponent,
    ListUserComponent,
    EditUserComponent,
    AdminLayoutComponent,
    LoginComponent,
    UsersComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    LoginFComponent,
    SignupFComponent,
    CompetenceComponent,
    AddCompetenceComponent,
    EditCompetenceComponent,
    MissionComponent,
    AddMissionComponent,
    EditMissionComponent,
    DetailsMissionComponent,
    MissionsPageComponent,
    ParticipateComponent,
    MissionComptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
