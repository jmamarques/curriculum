import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileCreatorComponent} from './profile-creator/profile-creator.component';
import {ProfileViewerComponent} from './profile-viewer/profile-viewer.component';
import {DialogSocialNetworksComponent} from './profile-creator/dialog-social-networks/dialog-social-networks.component';
import {AdicionalInfoComponent} from './profile-creator/adicional-info/adicional-info.component';
import {ConclusionComponent} from './profile-creator/conclusion/conclusion.component';
import {ExperienceComponent as ExperienceCreatorComponent} from './profile-creator/experience/experience.component';
import {ExperienceComponent as ExperienceViewerComponent} from './profile-viewer/experience/experience.component';
import {ProfileDetailsComponent} from './profile-creator/profile-details/profile-details.component';
import {TechnicalSkillsComponent} from './profile-creator/technical-skills/technical-skills.component';
import {PersonalDetailComponent} from './profile-viewer/personal-detail/personal-detail.component';
import {SkillsComponent} from './profile-viewer/skills/skills.component';
import {ProjectsComponent} from './profile-creator/projects/projects.component';


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
    AdicionalInfoComponent,
    ConclusionComponent,
    DialogSocialNetworksComponent,
    ExperienceCreatorComponent,
    ProfileDetailsComponent,
    ProjectsComponent,
    TechnicalSkillsComponent,
    AdicionalInfoComponent,
    ExperienceViewerComponent,
    PersonalDetailComponent,
    SkillsComponent
  ];
}
