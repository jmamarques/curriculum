import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderService} from '../../core/services/header.service';

@Component({
  selector: 'cod-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.scss']
})
export class ProfileViewerComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.headerService.setContent('João Marques Curriculum');
    this.headerService.setCodVisible(false);
  }

  ngOnDestroy(): void {
    this.headerService.restoreAll();
  }

}
