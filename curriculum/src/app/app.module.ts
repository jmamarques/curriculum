import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {CommonModule} from '@angular/common';
import {CodModule} from './cod/cod.module';
import {DialogExperienceComponent} from './cod/profile/profile-creator/dialog-experience/dialog-experience.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, DialogExperienceComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // app
    AppRoutingModule,
    // core
    CoreModule,
    // features modules
    CodModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    BsDatepickerModule.forRoot(),
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
