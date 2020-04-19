import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cod-time-line',
  template: '<ul class="timeline">\n' +
    '  <ng-content></ng-content>\n' +
    '</ul>',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
