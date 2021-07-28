import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommissairecomptePageRoutingModule } from './commissairecompte-routing.module';

import { CommissairecomptePage } from './commissairecompte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommissairecomptePageRoutingModule
  ],
  declarations: [CommissairecomptePage]
})
export class CommissairecomptePageModule {}
