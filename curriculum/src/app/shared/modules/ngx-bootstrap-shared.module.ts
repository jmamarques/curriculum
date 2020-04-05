import {NgModule} from '@angular/core';
import {PopoverModule} from 'ngx-bootstrap';

const imports = [PopoverModule];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class NgxBootstrapSharedModule {
}
