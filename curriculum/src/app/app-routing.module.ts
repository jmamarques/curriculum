import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortofolioComponent} from './cod/portofolio/portofolio.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {CreateAccountComponent} from './cod/create-account/create-account.component';
import {LogInAccountComponent} from './cod/log-in-account/log-in-account.component';
import {ContactComponent} from './cod/contact/contact.component';
import {ContactDetailsComponent} from './cod/contact/contact-details/contact-details.component';
import {ContactSupportComponent} from './cod/contact/contact-support/contact-support.component';
import {FaqPageComponent} from './cod/faq-page/faq-page.component';
import {TechnologiesComponent} from './cod/technologies/technologies.component';
import {ContactTechnologiesComponent} from './cod/contact/contact-technologies/contact-technologies.component';
import {HomepageComponent} from './core/homepage/homepage.component';
import {ProfileCreatorComponent} from './cod/profile/profile-creator/profile-creator.component';
import {ProfileViewerComponent} from './cod/profile/profile-viewer/profile-viewer.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'account/create', component: CreateAccountComponent},
  {path: 'account/log-in', component: LogInAccountComponent},
  {path: 'profile/creator', component: ProfileCreatorComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'cod/contacts', component: ContactComponent},
  {path: 'cod/contacts/details', component: ContactDetailsComponent},
  {path: 'cod/contacts/support', component: ContactSupportComponent},
  {path: 'cod/contacts/technologies', component: ContactTechnologiesComponent},
  {path: 'cod/faq', component: FaqPageComponent},
  {path: 'technologies/users', component: TechnologiesComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'portofolio', component: PortofolioComponent},
  {path: 'profile', component: ProfileViewerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
