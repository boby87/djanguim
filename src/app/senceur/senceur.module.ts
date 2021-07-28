import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenceurPageRoutingModule } from './senceur-routing.module';

import { SenceurPage } from './senceur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenceurPageRoutingModule
  ],
  declarations: [SenceurPage]
})
export class SenceurPageModule {}
