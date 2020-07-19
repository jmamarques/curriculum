import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from '../../../core/services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../../shared/interfaces/profile';
import {EmitEvent, EventBusService, Events} from '../../../core/services/util/event-bus.service';

@Component({
  selector: 'cod-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.scss']
})
export class ProfileViewerComponent implements OnInit, OnDestroy, AfterViewInit {

  profile: Profile;

  constructor(private eventBusService: EventBusService,
              private profileService: ProfileService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.profileService.getProfile(id).subscribe(value => this.profile = value);
  }

  ngAfterViewInit(): void {
    this.eventBusService.emit(new EmitEvent(Events.Header, {
      title: `${this.profile.firstName} ${this.profile.lastName} Curriculum`,
      codVisible: false
    }));
  }

  ngOnDestroy(): void {
    this.eventBusService.emit(new EmitEvent(Events.Header, {}));
  }

}
