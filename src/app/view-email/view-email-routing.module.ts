import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmailPage } from './view-email.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEmailPageRoutingModule {}
