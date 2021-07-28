import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TresorierPage } from './tresorier.page';

const routes: Routes = [
  {
    path: '',
    component: TresorierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TresorierPageRoutingModule {}
