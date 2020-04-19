import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PortofolioComponent} from './cod/portofolio/portofolio.component';
import {MatCardModule} from '@angular/material/card';
import {MaterialSharedModule} from './shared/modules/material-shared.module';
import {NgxBootstrapSharedModule} from './shared/modules/ngx-bootstrap-shared.module';
import {PrimeNgSharedModule} from './shared/modules/prime-ng-shared.module';
import {MenuComponent} from './core/menu/menu.component';
import {BsDatepickerModule, CollapseModule} from 'ngx-bootstrap';
import {HeaderComponent} from './core/header/header.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {CreateAccountComponent} from './cod/create-account/create-account.component';
import {LogInAccountComponent} from './cod/log-in-account/log-in-account.component';
import {ContactComponent} from './cod/contact/contact.component';
import {ContactDetailsComponent} from './cod/contact/contact-details/contact-details.component';
import {ContactSupportComponent} from './cod/contact/contact-support/contact-support.component';
import {AgGridModule} from 'ag-grid-angular';
import {AgChartsAngularModule} from 'ag-charts-angular';
import {TechnologiesComponent} from './cod/technologies/technologies.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {HttpClientModule} from '@angular/common/http';
import {NumberCommaPipe} from './shared/pipes/number-comma.pipe';
import {FooterComponent} from './core/footer/footer.component';
import {ContactTechnologiesComponent} from './cod/contact/contact-technologies/contact-technologies.component';
import {FaqPageComponent} from './cod/faq-page/faq-page.component';
import {SortByFildPipe} from './shared/pipes/sort-by-field.pipe';
import {HomepageComponent} from './core/homepage/homepage.component';
import {StaticsComponent} from './cod/contact/contact-technologies/statics/statics.component';
import {ProfileCreatorComponent} from './cod/profile-creator/profile-creator.component';
import {ProfileDetailsComponent} from './cod/profile-creator/profile-details/profile-details.component';
import {TechnicalSkillsComponent} from './cod/profile-creator/technical-skills/technical-skills.component';
import {ExperienceComponent as ExperienceCreateComponent} from './cod/profile-creator/experience/experience.component';
import {ProjectsComponent} from './cod/profile-creator/projects/projects.component';
import {AdicionalInfoComponent} from './cod/profile-creator/adicional-info/adicional-info.component';
import {ConclusionComponent} from './cod/profile-creator/conclusion/conclusion.component';
import {ProfileViewerComponent} from './cod/profile-viewer/profile-viewer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {PersonalDetailComponent} from './cod/profile-viewer/personal-detail/personal-detail.component';
import {ExperienceComponent} from './cod/profile-viewer/experience/experience.component';
import {SkillsComponent} from './cod/profile-viewer/skills/skills.component';
import {AdditionalInformationComponent} from './cod/profile-viewer/additional-information/additional-information.component';
import {FormsModule} from '@angular/forms';
import { DialogSocialNetworksComponent } from './cod/profile-creator/dialog-social-networks/dialog-social-networks.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PortofolioComponent,
    MenuComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CreateAccountComponent,
    LogInAccountComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactSupportComponent,
    FooterComponent,
    TechnologiesComponent,
    NumberCommaPipe,
    ContactTechnologiesComponent,
    FaqPageComponent,
    SortByFildPipe,
    HomepageComponent,
    StaticsComponent,
    ProfileCreatorComponent,
    ProfileDetailsComponent,
    ExperienceComponent,
    TechnicalSkillsComponent,
    ProjectsComponent,
    AdicionalInfoComponent,
    ConclusionComponent,
    ProfileViewerComponent,
    PersonalDetailComponent,
    ExperienceComponent,
    SkillsComponent,
    ExperienceCreateComponent,
    AdditionalInformationComponent,
    DialogSocialNetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialSharedModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), // teoricamente isto eh para debbuggin but idk
    NgxBootstrapSharedModule,
    PrimeNgSharedModule,
    CollapseModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers:
  [NumberCommaPipe,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
