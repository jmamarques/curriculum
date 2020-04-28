import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'account',
    children: [
      {path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
    ]
  },
  {
    path: 'contacts',
    children: [
      {path: '', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
    ]
  },
  {
    path: 'faq',
    children: [
      {path: '', loadChildren: () => import('./faq-page/faq.module').then(m => m.FaqModule)},
    ]
  },
  {
    path: 'portofolio',
    children: [
      {path: '', loadChildren: () => import('./portofolio/portofolio.module').then(m => m.PortofolioModule)},
    ]
  },
  {
    path: 'profile',
    children: [
      {path: '', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodRoutingModule {
}
