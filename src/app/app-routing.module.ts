import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'president',
    loadChildren: () => import('./president/president.module').then( m => m.PresidentPageModule)
  },
  {
    path: 'tresorier',
    loadChildren: () => import('./tresorier/tresorier.module').then( m => m.TresorierPageModule)
  },
  {
    path: 'secretaire',
    loadChildren: () => import('./secretaire/secretaire.module').then( m => m.SecretairePageModule)
  },
  {
    path: 'senceur',
    loadChildren: () => import('./senceur/senceur.module').then( m => m.SenceurPageModule)
  },
  {
    path: 'commissairecompte',
    loadChildren: () => import('./commissairecompte/commissairecompte.module').then( m => m.CommissairecomptePageModule)
  },
  {
    path: 'aderant',
    loadChildren: () => import('./aderant/aderant.module').then( m => m.AderantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
