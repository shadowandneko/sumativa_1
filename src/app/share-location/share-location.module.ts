import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareLocationPageRoutingModule } from './share-location-routing.module';

import { ShareLocationPage } from './share-location.page';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareLocationPageRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [ShareLocationPage]
})
export class ShareLocationPageModule {}
