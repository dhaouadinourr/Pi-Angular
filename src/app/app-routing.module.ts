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
import { ArticleComponent } from './admin/article/article.component';
import { SingleArticleComponent } from './front/single-article/single-article.component';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { UpdateArticleComponent } from './admin/update-article/update-article.component';
import { FrontArticleComponent } from './front/front-article/front-article.component';
import { BackSingArticleComponent } from './admin/back-sing-article/back-sing-article.component';

const routes: Routes = [ 
  {path: 'Article', component:ArticleComponent},
  {path: 'SingleArticle/:id', component:SingleArticleComponent},
  {path: 'updateArticle/:id', component:UpdateArticleComponent},
  {path: 'AddArticle', component:AddArticleComponent},
  {path: 'front/Article', component:FrontArticleComponent},
  {path: 'back/SingleArticle/:id', component:BackSingArticleComponent},

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
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
