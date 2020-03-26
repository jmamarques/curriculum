import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

const imports = [MatCardModule];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class MaterialSharedModule {
}
