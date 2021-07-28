import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretairePage } from './secretaire.page';

const routes: Routes = [
  {
    path: '',
    component: SecretairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretairePageRoutingModule {}
