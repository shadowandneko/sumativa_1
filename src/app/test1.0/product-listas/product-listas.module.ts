import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListasPageRoutingModule } from './product-listas-routing.module';

import { ProductListasPage } from './product-listas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListasPageRoutingModule
  ],
  declarations: [ProductListasPage]
})
export class ProductListasPageModule {}
