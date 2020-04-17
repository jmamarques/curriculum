import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../../core/services/profile.service';
import {Profile} from '../../../shared/interfaces/profile';

@Component({
  selector: 'cod-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

  private profile: Profile;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {

  }

}
