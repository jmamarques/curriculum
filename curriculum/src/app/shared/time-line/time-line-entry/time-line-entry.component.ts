import {Component, Input, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'cod-time-line-entry',
  templateUrl: './time-line-entry.component.html',
  styleUrls: ['./time-line-entry.component.scss']
})
export class TimeLineEntryComponent implements OnInit {
  @Input() private invert = false;

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
