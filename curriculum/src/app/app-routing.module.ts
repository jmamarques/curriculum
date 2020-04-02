import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './core/homepage/homepage.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import { CreateAccountComponent } from './core/create-account/create-account.component';
import { LogInAccountComponent } from './core/log-in-account/log-in-account.component';


const routes: Routes = [
  {path:'account/create',component:CreateAccountComponent},
  {path:'account/log-in',component:LogInAccountComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
