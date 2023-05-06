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
import { ListproductComponent } from './admin/listproduct/listproduct.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ListcategoryComponent } from './admin/listcategory/listcategory.component';
import { CategoryproductComponent } from './admin/categoryproduct/categoryproduct.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { EventbycategComponent } from './front/eventbycateg/eventbycateg.component';
import { SingleventComponent } from './front/singlevent/singlevent.component';

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
   { path: 'updateProduct/:id', component: UpdateProductComponent },
{path: 'addProductCategory', component: CategoryproductComponent},
{path: 'listCategoryProduct', component: ListcategoryComponent},
    {path: 'product/add', component: AddproductComponent},
{ path: 'listProduct', component: ListproductComponent },
{path: 'event/:id',component:EventbycategComponent},
{path: 'eventdetails/:id',component:SingleventComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

  })
  
export class AppRoutingModule { }
