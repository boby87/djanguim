import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AderantPage } from './aderant.page';

const routes: Routes = [
  {
    path: '',
    component: AderantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AderantPageRoutingModule {}
