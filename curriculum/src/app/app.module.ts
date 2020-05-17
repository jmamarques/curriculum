import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {CommonModule} from '@angular/common';
import {CodModule} from './cod/cod.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // app
    AppRoutingModule,
    // core
    CoreModule,
    // features modules
    CodModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
