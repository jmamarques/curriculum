import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../shared/interfaces/profile';

@Component({
  selector: 'cod-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() private profile: Profile;

  constructor() {
  }

  ngOnInit(): void {

  }

}
