import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../../shared/interfaces/profile';

@Component({
  selector: 'cod-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  @Input() private profile: Profile;

  constructor() {
  }

  ngOnInit(): void {
  }

}
