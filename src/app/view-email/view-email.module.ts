import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEmailPageRoutingModule } from './view-email-routing.module';

import { ViewEmailPage } from './view-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEmailPageRoutingModule
  ],
  declarations: [ViewEmailPage]
})
export class ViewEmailPageModule {}
