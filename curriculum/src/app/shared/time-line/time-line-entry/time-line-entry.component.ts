import {Component, Input, OnInit} from '@angular/core';

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
  }

}
