import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FreightDetailPage } from './freight-detail';

const routes: Routes = [
  {
    path: '',
    component: FreightDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreightDetailPageRoutingModule { }
