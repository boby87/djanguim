import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TresorierPageRoutingModule } from './tresorier-routing.module';

import { TresorierPage } from './tresorier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TresorierPageRoutingModule
  ],
  declarations: [TresorierPage]
})
export class TresorierPageModule {}
