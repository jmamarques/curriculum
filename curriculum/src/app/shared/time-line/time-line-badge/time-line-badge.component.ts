import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cod-time-line-badge',
  templateUrl: './time-line-badge.component.html',
  styleUrls: ['./time-line-badge.component.scss']
})
export class TimeLineBadgeComponent implements OnInit, AfterViewInit {
  @ContentChild('content') content: ElementRef;
  @Input() private visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
