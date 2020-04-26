import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MenuComponent} from './menu/menu.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    MenuComponent
  ]
})
export class CoreModule {
}
