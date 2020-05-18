import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../../shared/interfaces/profile';
import {CircleProgressComponent} from 'ng-circle-progress';

@Component({
  selector: 'cod-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() profile: Profile;

  constructor() {
  }

  ngOnInit(): void {
  }

  animate(circleProgress: CircleProgressComponent, rating: number) {
    if (!circleProgress.isDrawing()) {
      circleProgress.animate(0, rating);
    }
  }
}
