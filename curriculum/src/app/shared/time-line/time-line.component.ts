import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'cod-time-line',
  template: '<ul class="timeline">\n' +
    '  <ng-content></ng-content>\n' +
    '</ul>',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  issuesList: any[] = [
    'ola', 'adeus'
  ];

  constructor() {
  }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  }

}
