import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherViewPage } from './other-view.page';

const routes: Routes = [
  {
    path: '',
    component: OtherViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherViewPageRoutingModule {}
