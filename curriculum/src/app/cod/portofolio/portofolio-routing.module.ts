import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortofolioComponent} from './portofolio.component';


const routes: Routes = [
  {path: '', component: PortofolioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortofolioRoutingModule {
  static components = [PortofolioComponent];
}
