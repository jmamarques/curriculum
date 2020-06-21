import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileCreatorComponent} from './profile-creator/profile-creator.component';
import {ProfileViewerComponent} from './profile-viewer/profile-viewer.component';
import {DialogSocialNetworksComponent} from './profile-creator/dialog-social-networks/dialog-social-networks.component';
import {ExperienceComponent as ExperienceViewerComponent} from './profile-viewer/experience/experience.component';
import {ProfileDetailsComponent} from './profile-creator/profile-details/profile-details.component';
import {PersonalDetailComponent} from './profile-viewer/personal-detail/personal-detail.component';
import {SkillsComponent} from './profile-viewer/skills/skills.component';
import {AdditionalInformationComponent} from './profile-viewer/additional-information/additional-information.component';
import {DialogExperienceComponent} from './profile-creator/dialog-experience/dialog-experience.component';
import { DialogSkillsComponent } from './profile-creator/dialog-skills/dialog-skills.component';


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
    ProfileDetailsComponent,
    AdditionalInformationComponent,
    ExperienceViewerComponent,
    PersonalDetailComponent,
    SkillsComponent,
    DialogExperienceComponent,
    DialogSkillsComponent
  ];
}
