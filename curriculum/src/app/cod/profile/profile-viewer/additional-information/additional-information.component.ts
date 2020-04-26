import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../../shared/interfaces/profile';

@Component({
  selector: 'cod-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {
  @Input() private profile: Profile;

  constructor() {
  }

  ngOnInit(): void {
  }

}
