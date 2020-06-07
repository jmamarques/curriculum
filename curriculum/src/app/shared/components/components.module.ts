import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from './rating/rating.component';
import {MaterialSharedModule} from '../modules/material-shared.module';

const modules = [
  RatingComponent
];

@NgModule({
  declarations: [modules],
  imports: [
    CommonModule,
    MaterialSharedModule
  ],
  exports: modules
})
export class ComponentsModule {
}
