import {NgModule} from '@angular/core';
import {PopoverModule} from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const imports = [PopoverModule,BrowserAnimationsModule, BsDatepickerModule,];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class NgxBootstrapSharedModule {
}
