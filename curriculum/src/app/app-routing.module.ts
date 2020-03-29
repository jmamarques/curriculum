import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './core/homepage/homepage.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
