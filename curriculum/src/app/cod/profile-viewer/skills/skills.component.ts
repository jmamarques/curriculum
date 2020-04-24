import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../shared/interfaces/profile';

@Component({
  selector: 'cod-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() private profile: Profile;

  constructor() {
  }

  ngOnInit(): void {
  }

}
