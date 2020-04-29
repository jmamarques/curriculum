import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FaqRoutingModule} from './faq-routing.module';
import {MaterialSharedModule} from '../../shared/modules/material-shared.module';


@NgModule({
  declarations: [FaqRoutingModule.components],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MaterialSharedModule,
  ]
})
export class FaqModule {
}
