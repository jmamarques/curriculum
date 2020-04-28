import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TechnologiesComponent} from './cod/technologies/technologies.component';
import {HttpClientModule} from '@angular/common/http';
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
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
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
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // app
    AppRoutingModule,
    // core
    CoreModule,
    // features modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
