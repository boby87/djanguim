import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatereunionPageRoutingModule } from './createreunion-routing.module';

import { CreatereunionPage } from './createreunion.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreatereunionPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CreatereunionPage]
})
export class CreatereunionPageModule {}
