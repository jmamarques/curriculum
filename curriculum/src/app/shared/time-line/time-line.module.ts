import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeLineComponent} from './time-line.component';
import {TimeLineBadgeComponent} from './time-line-badge/time-line-badge.component';
import {TimeLineHeaderComponent} from './time-line-header/time-line-header.component';
import {TimeLineBodyComponent} from './time-line-body/time-line-body.component';
import {TimeLineEntryComponent} from './time-line-entry/time-line-entry.component';

const declarable = [
  TimeLineComponent,
  TimeLineBadgeComponent,
  TimeLineHeaderComponent,
  TimeLineBodyComponent,
  TimeLineEntryComponent,
];

@NgModule({
  declarations: declarable,
  exports: declarable,
  imports: [
    CommonModule
  ],
})
export class TimeLineModule {
}
