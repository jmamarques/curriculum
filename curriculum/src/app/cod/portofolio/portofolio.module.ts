import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortofolioRoutingModule} from './portofolio-routing.module';
import {PrimeNgSharedModule} from '../../shared/modules/prime-ng-shared.module';


@NgModule({
  declarations: [PortofolioRoutingModule.components],
  imports: [
    CommonModule,
    PortofolioRoutingModule,
    PrimeNgSharedModule
  ]
})
export class PortofolioModule {
}
