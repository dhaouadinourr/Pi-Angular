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
