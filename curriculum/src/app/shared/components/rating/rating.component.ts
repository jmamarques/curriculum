import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'cod-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating = 0;
  @Input() maxRate = 10;
  rateFilled: number[];
  rateNotFilled: number[];
  maxWidth: string;

  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    // calculate maxWidth
    this.maxWidth = `${this.maxRate * 16}px`;
    // control to not allow rate > maxRate
    this.rating = this.rating % this.maxRate;
    // prepare to create all rate stuff in html
    this.rateFilled = Array(this.rating).fill([]).map((x, i) => i);
    this.rateNotFilled = Array(this.maxRate - this.rating).fill([]).map((x, i) => i);
    // animations
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: false
    });
  }

  ngOnChanges(): void {
  }

  onClick(): void {
    this.ratingClicked.emit(this.rating);
  }


}
