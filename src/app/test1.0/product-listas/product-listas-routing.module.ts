import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListasPage } from './product-listas.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListasPageRoutingModule {}
