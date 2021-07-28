import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommissairecomptePage } from './commissairecompte.page';

const routes: Routes = [
  {
    path: '',
    component: CommissairecomptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommissairecomptePageRoutingModule {}
