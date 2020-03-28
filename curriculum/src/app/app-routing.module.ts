import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './core/homepage/homepage.component';
import {MenuComponent} from './core/menu/menu.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
