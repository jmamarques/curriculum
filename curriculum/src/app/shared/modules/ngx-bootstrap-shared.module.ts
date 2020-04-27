import {NgModule} from '@angular/core';
import {CollapseModule, PopoverModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

const imports = [
  PopoverModule,
  BrowserAnimationsModule,
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
