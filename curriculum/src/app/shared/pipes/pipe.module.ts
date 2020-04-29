import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {DateDurationPipe} from './date-duration.pipe';
import {NumberCommaPipe} from './number-comma.pipe';
import {SortByFildPipe} from './sort-by-field.pipe';

const declarable = [
  DateDurationPipe,
  NumberCommaPipe,
  SortByFildPipe
];

@NgModule({
  declarations: declarable,
  exports: declarable,
  imports: [
    CommonModule
  ],
  providers: [
    NumberCommaPipe,
    DatePipe,
  ]
})
export class PipeModule {
}
