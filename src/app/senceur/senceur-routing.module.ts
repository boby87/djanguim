import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenceurPage } from './senceur.page';

const routes: Routes = [
  {
    path: '',
    component: SenceurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenceurPageRoutingModule {}
