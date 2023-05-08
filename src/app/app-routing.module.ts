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
import { EventbydateComponent } from './front/eventbydate/eventbydate.component';

const routes: Routes = [ 
  {path : '', component:HeaderComponent},

  {path: 'event', component: EventsComponent},
 
{path: 'addCategory', component: AddCategorieComponent},
{path: 'listCategory', component: CategorieEventsComponent},
{path:'admin',component: DashbordComponent},
{path: 'addEvent', component: AddEventComponent},
   { path: 'listEvent', component: ListEventComponent },
   { path: 'updateEvent/:id', component: EditeEventComponent},
   { path: 'updateProduct/:id', component: UpdateProductComponent },
{path: 'addProductCategory', component: CategoryproductComponent},
{path: 'listCategoryProduct', component: ListcategoryComponent},
    {path: 'product/add', component: AddproductComponent},
{ path: 'listProduct', component: ListproductComponent },
{path: 'event/:id',component:EventbycategComponent},
{path: 'eventdetails/:id',component:SingleventComponent},
{path:'eventbydate',component:EventbydateComponent},

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
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

  })
  
export class AppRoutingModule { }
