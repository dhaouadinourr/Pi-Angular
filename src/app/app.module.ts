import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { NavComponent } from './admin/nav/nav.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
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
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ListproductComponent } from './admin/listproduct/listproduct.component';
import { CategoryproductComponent } from './admin/categoryproduct/categoryproduct.component';
import { ListcategoryComponent } from './admin/listcategory/listcategory.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { CategoryeventComponent } from './front/categoryevent/categoryevent.component';
import { EventbycategComponent } from './front/eventbycateg/eventbycateg.component';
import { SingleventComponent } from './front/singlevent/singlevent.component';
import { ReviewComponent } from './front/singlevent/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    NavComponent,
    SidebarComponent,

    CategorieEventsComponent,
    AddCategorieComponent,
    AddEventComponent,
    ListEventComponent,
    EditeEventComponent,
    HeaderComponent,
    EventsComponent,
    AddproductComponent,
    ListproductComponent,
    CategoryproductComponent,
    ListcategoryComponent,
    UpdateProductComponent,
    CategoryeventComponent,
    EventbycategComponent,
    SingleventComponent,
    ReviewComponent,
   
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
