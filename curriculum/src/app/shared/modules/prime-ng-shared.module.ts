import {NgModule} from '@angular/core';
import {CarouselModule, DropdownModule} from 'primeng';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';






const imports = [DropdownModule, ButtonModule, RadioButtonModule, CheckboxModule, CardModule, CarouselModule,InputTextModule,CalendarModule,InputTextareaModule];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class PrimeNgSharedModule {
}
