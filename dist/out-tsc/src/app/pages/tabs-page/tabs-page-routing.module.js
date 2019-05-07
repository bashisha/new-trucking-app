import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs-page';
import { TrucksPage } from '../trucks/trucks';
var routes = [
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
                path: 'speakers',
                children: [
                    {
                        path: '',
                        loadChildren: '../speaker-list/speaker-list.module#SpeakerListModule'
                    }
                    /*           ,
                              {
                                path: 'session/:sessionId',
                                loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
                              },
                              {
                                path: 'speaker-details/:speakerId',
                                loadChildren: '../speaker-detail/speaker-detail.module#SpeakerDetailModule'
                              } */
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
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-page-routing.module.js.map