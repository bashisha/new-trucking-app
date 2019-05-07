import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrucksPage } from './trucks';

const routes: Routes = [
  {
    path: '',
    component: TrucksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulePageRoutingModule { }
