import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/shared/interfaces/profile';
import { DialogSkillsComponent } from '../dialog-skills/dialog-skills.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'cod-skill-stepper',
  templateUrl: './skill-stepper.component.html',
  styleUrls: ['./skill-stepper.component.scss']
})
export class SkillStepperComponent implements OnInit {
  @Input() profile:Profile

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSkillDialog() {
    const dialog = this.dialog.open(DialogSkillsComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.profile.skills ? this.profile.skills.push(result) : this.profile.skills = [result];
      }

    });
  }
  editSkillDialog(index: number) {
    const skillToEdit = this.profile.skills[index];
    const dialog = this.dialog.open(DialogSkillsComponent, { data: skillToEdit });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.profile.skills[index] = result;
      }
    });
  }

  deleteSkill(index: number) {
    this.profile.skills.splice(index, 1);
  }

}
