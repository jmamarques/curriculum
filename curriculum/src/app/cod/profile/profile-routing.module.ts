import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileCreatorComponent} from './profile-creator/profile-creator.component';
import {ProfileViewerComponent} from './profile-viewer/profile-viewer.component';
import {DialogSocialNetworksComponent} from './profile-creator/dialog-social-networks/dialog-social-networks.component';
import {ExperienceComponent as ExperienceViewerComponent} from './profile-viewer/experience/experience.component';
import {PersonalDetailComponent} from './profile-viewer/personal-detail/personal-detail.component';
import {SkillsComponent} from './profile-viewer/skills/skills.component';
import {AdditionalInformationComponent} from './profile-viewer/additional-information/additional-information.component';
import {DialogExperienceComponent} from './profile-creator/dialog-experience/dialog-experience.component';
import {DialogSkillsComponent} from './profile-creator/dialog-skills/dialog-skills.component';
import {InterestsComponent} from './profile-viewer/interests/interests.component';
import {DialogAdicionalInfoComponent} from './profile-creator/dialog-adicional-info/dialog-adicional-info.component';
import {DialogPdfOverviewComponent} from './profile-viewer/additional-information/dialog-pdf-overview/dialog-pdf-overview.component';
import { ExperienceStepperComponent } from './profile-creator/experience-stepper/experience-stepper.component';
import { SkillStepperComponent } from './profile-creator/skill-stepper/skill-stepper.component';
import { AdicionalInfoStepperComponent } from './profile-creator/adicional-info-stepper/adicional-info-stepper.component';


const routes: Routes = [
  {path: '', component: ProfileViewerComponent},
  {path: 'creator', component: ProfileCreatorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
  static components = [
    ProfileCreatorComponent,
    ProfileViewerComponent,
    DialogSocialNetworksComponent,
    AdditionalInformationComponent,
    ExperienceViewerComponent,
    PersonalDetailComponent,
    SkillsComponent,
    DialogExperienceComponent,
    DialogSkillsComponent,
    InterestsComponent,
    DialogAdicionalInfoComponent,
    DialogPdfOverviewComponent,
    ExperienceStepperComponent,
    SkillStepperComponent,
    AdicionalInfoStepperComponent
  ];
}
