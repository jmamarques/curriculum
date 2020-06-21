import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {TimeLineModule} from '../../shared/time-line/time-line.module';
import {MaterialSharedModule} from '../../shared/modules/material-shared.module';
import {PrimeNgSharedModule} from '../../shared/modules/prime-ng-shared.module';
import {NgxBootstrapSharedModule} from '../../shared/modules/ngx-bootstrap-shared.module';
import {PipeModule} from '../../shared/pipes/pipe.module';
import {AgGridModule} from 'ag-grid-angular';
import {AgChartsAngularModule} from 'ag-charts-angular';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ComponentsModule} from '../../shared/components/components.module';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [ProfileRoutingModule.components],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    TimeLineModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    MaterialSharedModule,
    PrimeNgSharedModule,
    NgxBootstrapSharedModule,
    NgCircleProgressModule.forRoot(),
    ComponentsModule,
    RatingModule,
    RatingModule.forRoot()
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false, showError: true }
  }
  ]
})
export class ProfileModule {
}
