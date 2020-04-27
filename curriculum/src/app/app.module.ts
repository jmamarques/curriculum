import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PortofolioComponent} from './cod/portofolio/portofolio.component';
import {ContactComponent} from './cod/contact/contact.component';
import {ContactDetailsComponent} from './cod/contact/contact-details/contact-details.component';
import {ContactSupportComponent} from './cod/contact/contact-support/contact-support.component';
import {AgGridModule} from 'ag-grid-angular';
import {AgChartsAngularModule} from 'ag-charts-angular';
import {TechnologiesComponent} from './cod/technologies/technologies.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {HttpClientModule} from '@angular/common/http';
import {ContactTechnologiesComponent} from './cod/contact/contact-technologies/contact-technologies.component';
import {FaqPageComponent} from './cod/faq-page/faq-page.component';
import {StaticsComponent} from './cod/contact/contact-technologies/statics/statics.component';
import {ProfileCreatorComponent} from './cod/profile/profile-creator/profile-creator.component';
import {ProfileDetailsComponent} from './cod/profile/profile-creator/profile-details/profile-details.component';
import {TechnicalSkillsComponent} from './cod/profile/profile-creator/technical-skills/technical-skills.component';
import {ExperienceComponent as ExperienceCreateComponent} from './cod/profile/profile-creator/experience/experience.component';
import {ProjectsComponent} from './cod/profile/profile-creator/projects/projects.component';
import {AdicionalInfoComponent} from './cod/profile/profile-creator/adicional-info/adicional-info.component';
import {ConclusionComponent} from './cod/profile/profile-creator/conclusion/conclusion.component';
import {ProfileViewerComponent} from './cod/profile/profile-viewer/profile-viewer.component';
import {PersonalDetailComponent} from './cod/profile/profile-viewer/personal-detail/personal-detail.component';
import {ExperienceComponent} from './cod/profile/profile-viewer/experience/experience.component';
import {SkillsComponent} from './cod/profile/profile-viewer/skills/skills.component';
import {AdditionalInformationComponent} from './cod/profile/profile-viewer/additional-information/additional-information.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogSocialNetworksComponent} from './cod/profile/profile-creator/dialog-social-networks/dialog-social-networks.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PortofolioComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactSupportComponent,
    TechnologiesComponent,
    ContactTechnologiesComponent,
    FaqPageComponent,
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
    DialogSocialNetworksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // core
    CoreModule,
    // features modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
