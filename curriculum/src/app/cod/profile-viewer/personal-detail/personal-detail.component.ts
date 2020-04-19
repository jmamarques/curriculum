import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../shared/interfaces/profile';

@Component({
  selector: 'cod-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

  @Input() private profile: Profile;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Control visibility when the image is broken
   * @param socialLink - url to image
   * @param socialName - social Name to display when the link is broken
   */
  imageHide(socialLink: HTMLImageElement, socialName: HTMLSpanElement) {
    socialLink.style.display = 'none';
    socialName.className = '';
  }
}
