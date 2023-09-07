import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LostPageRoutingModule } from './lost-routing.module';

import { LostPage } from './lost.page';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LostPageRoutingModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  declarations: [LostPage]
})
export class LostPageModule {}
