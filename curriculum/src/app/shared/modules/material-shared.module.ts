import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ButtonModule} from 'primeng/button';

const imports = [MatCardModule,ButtonModule];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class MaterialSharedModule {
}
