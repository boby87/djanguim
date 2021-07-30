import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'president',
        loadChildren: () => import('../president/president.module').then( m => m.PresidentPageModule)
      },
      {
        path: 'tresorier',
        loadChildren: () => import('../tresorier/tresorier.module').then( m => m.TresorierPageModule)
      },
      {
        path: 'secretaire',
        loadChildren: () => import('../secretaire/secretaire.module').then( m => m.SecretairePageModule)
      },
      {
        path: 'senceur',
        loadChildren: () => import('../senceur/senceur.module').then( m => m.SenceurPageModule)
      },
      {
        path: 'commissairecompte',
        loadChildren: () => import('../commissairecompte/commissairecompte.module').then( m => m.CommissairecomptePageModule)
      },
      {
        path: 'aderant',
        loadChildren: () => import('../aderant/aderant.module').then( m => m.AderantPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
