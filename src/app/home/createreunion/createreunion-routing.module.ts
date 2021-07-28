import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatereunionPage } from './createreunion.page';

const routes: Routes = [
  {
    path: '',
    component: CreatereunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatereunionPageRoutingModule {}
