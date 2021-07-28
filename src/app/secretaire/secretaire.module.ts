import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretairePageRoutingModule } from './secretaire-routing.module';

import { SecretairePage } from './secretaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretairePageRoutingModule
  ],
  declarations: [SecretairePage]
})
export class SecretairePageModule {}
