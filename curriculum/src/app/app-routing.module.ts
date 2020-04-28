import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {TechnologiesComponent} from './cod/technologies/technologies.component';
import {HomepageComponent} from './core/homepage/homepage.component';
import {ProfileCreatorComponent} from './cod/profile/profile-creator/profile-creator.component';
import {ProfileViewerComponent} from './cod/profile/profile-viewer/profile-viewer.component';


const routes: Routes = [

  {path: '', component: HomepageComponent},

  {path: 'cod', loadChildren: () => import('./cod/cod.module').then(m => m.CodModule)},

  {path: 'cod/technologies/users', component: TechnologiesComponent},

  {path: 'cod/profile/creator', component: ProfileCreatorComponent},
  {path: 'cod/profile', component: ProfileViewerComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
