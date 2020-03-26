import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomepageComponent } from './core/homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import {MaterialSharedModule} from './shared/modules/material-shared.module';

const appRoutes: Routes = [
    { path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialSharedModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}) //teoricamente isto eh para debbuggin but idk

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
