import {NgModule} from '@angular/core';
import {DropdownModule} from 'primeng';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
const imports = [DropdownModule,ButtonModule,RadioButtonModule,CheckboxModule];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class PrimeNgSharedModule {
}
