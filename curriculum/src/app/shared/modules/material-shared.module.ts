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
import {MatBadgeModule} from '@angular/material/badge';
import {MatNativeDateModule, MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';


const imports = [
  MatCardModule,
  MatRadioModule,
  MatListModule,
  MatExpansionModule,
  MatTabsModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatDialogModule,
  MatBadgeModule,
  MatNativeDateModule,
  MatStepperModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatIconModule,
  MatOptionModule,
  MatButtonModule,
  MatRippleModule
];

@NgModule({
  declarations: [],
  imports: [
    ...imports, BsDatepickerModule.forRoot()
  ],
  exports: imports,
  providers: [
    MatDatepickerModule,
  ]
})
export class MaterialSharedModule {
}
