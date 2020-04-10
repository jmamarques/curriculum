import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortofolioComponent} from './core/portofolio/portofolio.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {CreateAccountComponent} from './core/create-account/create-account.component';
import {LogInAccountComponent} from './core/log-in-account/log-in-account.component';
import {ContactComponent} from './core/contact/contact.component';
import {ContactDetailsComponent} from './core/contact-details/contact-details.component';
import {ContactSupportComponent} from './core/contact-support/contact-support.component';
import {TechnologiesComponent} from './core/technologies/technologies.component';
import {ContactTechnologiesComponent} from './core/contact-technologies/contact-technologies.component';


const routes: Routes = [
  {path: 'account/create', component: CreateAccountComponent},
  {path: 'account/log-in', component: LogInAccountComponent},
  {path: 'cod/contacts', component: ContactComponent},
  {path: 'cod/contacts/details', component: ContactDetailsComponent},
  {path: 'cod/contacts/support', component: ContactSupportComponent},
  {path: 'cod/contacts/technologies', component: ContactTechnologiesComponent},
  {path: 'technologies/users', component: TechnologiesComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'portofolio', component: PortofolioComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
