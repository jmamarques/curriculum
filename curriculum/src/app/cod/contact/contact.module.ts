import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {AgGridModule} from 'ag-grid-angular';
import {AgChartsAngularModule} from 'ag-charts-angular';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {PipeModule} from '../../shared/pipes/pipe.module';
import {TimeLineModule} from '../../shared/time-line/time-line.module';


@NgModule({
  declarations: [ContactRoutingModule.components],
  imports: [
    CommonModule,
    ContactRoutingModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    PipeModule,
    TimeLineModule
    /*    MaterialSharedModule,
        PrimeNgSharedModule,
        NgxBootstrapSharedModule*/
  ]
})
export class ContactModule {
}
