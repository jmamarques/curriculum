import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';
import {ProfileService} from '../../../core/services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../../shared/interfaces/profile';

@Component({
  selector: 'cod-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.scss']
})
export class ProfileViewerComponent implements OnInit, OnDestroy, AfterViewInit {

  private profile: Profile;

  constructor(private headerService: HeaderService,
              private profileService: ProfileService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.profileService.getProfile(id).subscribe(value => this.profile = value);
  }

  ngAfterViewInit(): void {
    this.headerService.setContent(`${this.profile.firstName} ${this.profile.lastName} Curriculum`);
    this.headerService.setCodVisible(false);
  }

  ngOnDestroy(): void {
    this.headerService.restoreAll();
  }

}
