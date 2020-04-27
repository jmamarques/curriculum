import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAccountComponent} from './create-account/create-account.component';
import {LogInAccountComponent} from './log-in-account/log-in-account.component';


const routes: Routes = [
  {path: 'create', component: CreateAccountComponent},
  {path: 'log-in', component: LogInAccountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
  static components = [CreateAccountComponent, LogInAccountComponent];
}
