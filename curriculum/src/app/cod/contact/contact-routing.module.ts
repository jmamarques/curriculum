import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import {ContactSupportComponent} from './contact-support/contact-support.component';
import {ContactTechnologiesComponent} from './contact-technologies/contact-technologies.component';
import {ContactComponent} from './contact.component';
import {StaticsComponent} from './contact-technologies/statics/statics.component';


const routes: Routes = [
  {path: '', component: ContactComponent},
  {path: 'details', component: ContactDetailsComponent},
  {path: 'support', component: ContactSupportComponent},
  {path: 'technologies', component: ContactTechnologiesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
  static components = [
    ContactComponent,
    ContactDetailsComponent,
    ContactSupportComponent,
    ContactTechnologiesComponent,
    StaticsComponent
  ];
}
