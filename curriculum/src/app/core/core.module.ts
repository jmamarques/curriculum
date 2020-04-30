import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MenuComponent} from './menu/menu.component';
import {CollapseModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
    throw new Error(msg);
  }
}

const declare = [
  FooterComponent,
  HeaderComponent,
  HomepageComponent,
  MenuComponent,
  PageNotFoundComponent
];

@NgModule({
  declarations: declare,
  exports: declare,
  imports: [
    CommonModule,
    CollapseModule,
    RouterModule,
    ScrollingModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
