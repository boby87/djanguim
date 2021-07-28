import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AderantPageRoutingModule } from './aderant-routing.module';

import { AderantPage } from './aderant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AderantPageRoutingModule
  ],
  declarations: [AderantPage]
})
export class AderantPageModule {}
