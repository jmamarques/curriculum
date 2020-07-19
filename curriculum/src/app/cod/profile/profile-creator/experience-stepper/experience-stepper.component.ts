import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExperienceComponent } from '../dialog-experience/dialog-experience.component';
import { Profile } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'cod-experience-stepper',
  templateUrl: './experience-stepper.component.html',
  styleUrls: ['./experience-stepper.component.scss']
})
export class ExperienceStepperComponent implements OnInit {
  @Input() profile: Profile;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openExperienceDialog() {
    const dialog = this.dialog.open(DialogExperienceComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.profile.experienceList ?  this.profile.experienceList.push(result) :  this.profile.experienceList = [result];
      }
    });
  }

  editExperienceDialog(index: number) {
    const experienceUserToSend = this.profile.experienceList[index];
    const dialog = this.dialog.open(DialogExperienceComponent, { data: experienceUserToSend });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.profile.experienceList[index] = result
      }

    });
  }
  deleteExperience(index: number) {
    this.profile.experienceList.splice(index, 1);
  }
}
