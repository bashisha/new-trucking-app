import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { TrucksPage } from '../trucks/trucks';
import { FreightsPage } from '../freights/freights';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trucks',
        children: [
          {
            path: '',
            component: TrucksPage,
          }
          /*           ,
                    {
                      path: 'session/:sessionId',
                      loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
                    } */
        ]
      },
      {
        path: 'freights',
        children: [
          {
            path: '',
            component: FreightsPage
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

