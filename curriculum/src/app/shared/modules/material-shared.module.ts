import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';



const imports = [MatCardModule, MatRadioModule, MatListModule, MatExpansionModule, MatIconModule,
  MatTabsModule, MatGridListModule, MatInputModule, MatSelectModule, MatDatepickerModule,MatDialogModule];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: imports
})
export class MaterialSharedModule {
}
