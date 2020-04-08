import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomepageComponent} from './core/homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import {MaterialSharedModule} from './shared/modules/material-shared.module';
import {NgxBootstrapSharedModule} from './shared/modules/ngx-bootstrap-shared.module';
import {PrimeNgSharedModule} from './shared/modules/prime-ng-shared.module';
import {MenuComponent} from './core/menu/menu.component';
import {CollapseModule} from 'ngx-bootstrap';
import {HeaderComponent} from './core/header/header.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {CreateAccountComponent} from './core/create-account/create-account.component';
import {LogInAccountComponent} from './core/log-in-account/log-in-account.component';
import {ContactComponent} from './core/contact/contact.component';
import {ContactDetailsComponent} from './core/contact-details/contact-details.component';
import {ContactSupportComponent} from './core/contact-support/contact-support.component';
import {AgGridModule} from 'ag-grid-angular';
import {ContactTechnologiesComponent} from './core/contact-tecnologies/contact-technologies.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CreateAccountComponent,
    LogInAccountComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactSupportComponent,
    ContactTechnologiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialSharedModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), // teoricamente isto eh para debbuggin but idk
    NgxBootstrapSharedModule,
    PrimeNgSharedModule,
    CollapseModule,
    AgGridModule.withComponents([]),
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
