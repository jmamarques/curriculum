import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TechnologiesRoutingModule} from './technologies-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {AgChartsAngularModule} from 'ag-charts-angular';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
  declarations: [TechnologiesRoutingModule.components],
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
  ]
})
export class TechnologiesModule {
}
