import {NgModule} from '@angular/core';
import {DropdownModule} from 'primeng';

const imports = [DropdownModule];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class PrimeNgSharedModule {
}
