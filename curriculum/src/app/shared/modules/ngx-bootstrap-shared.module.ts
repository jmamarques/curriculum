import {NgModule} from '@angular/core';
import {CollapseModule, PopoverModule} from 'ngx-bootstrap';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

const imports = [
  PopoverModule,
  BsDatepickerModule,
  CollapseModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...imports,
    BsDatepickerModule.forRoot(),
  ],
  exports: imports
})
export class NgxBootstrapSharedModule {
}
