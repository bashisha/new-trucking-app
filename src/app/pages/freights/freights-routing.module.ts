import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FreightsPage } from './freights';
const routes: Routes = [
  {
    path: '',
    component: FreightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreightsPageRoutingModule { }
