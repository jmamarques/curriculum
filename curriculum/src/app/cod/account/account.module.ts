import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {MaterialSharedModule} from '../../shared/modules/material-shared.module';
import {PrimeNgSharedModule} from '../../shared/modules/prime-ng-shared.module';


@NgModule({
  declarations: [AccountRoutingModule.components],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialSharedModule,
    PrimeNgSharedModule
  ]
})
export class AccountModule {
}
