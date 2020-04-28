import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {TechnologiesComponent} from './cod/technologies/technologies.component';
import {HomepageComponent} from './core/homepage/homepage.component';


const routes: Routes = [

  {path: '', component: HomepageComponent},

  {path: 'cod', loadChildren: () => import('./cod/cod.module').then(m => m.CodModule)},

  {path: 'cod/technologies/users', component: TechnologiesComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
