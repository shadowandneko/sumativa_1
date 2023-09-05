import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherViewPageRoutingModule } from './other-view-routing.module';

import { OtherViewPage } from './other-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherViewPageRoutingModule
  ],
  declarations: [OtherViewPage]
})
export class OtherViewPageModule {}
