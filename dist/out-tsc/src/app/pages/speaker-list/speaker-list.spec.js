import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SpeakerListPage } from './speaker-list';
import { ConferenceData } from '../../providers/conference-data';
var confDataSub = {};
describe('SpeakerListPage', function () {
    var fixture, app;
    beforeEach(async(function () {
        var actionSheetSpy = jasmine.createSpyObj('ActionSheetController', [
            'create'
        ]);
        var routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
        var iabSpy = jasmine.createSpyObj('InAppBrowser', ['create']);
        TestBed.configureTestingModule({
            declarations: [SpeakerListPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: ActionSheetController, useValue: actionSheetSpy },
                { provide: InAppBrowser, useValue: iabSpy },
                { provide: Router, useValue: routerSpy },
                { provide: ConferenceData, useValue: confDataSub }
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SpeakerListPage);
        app = fixture.debugElement.componentInstance;
    });
    it('should create the speaker list page', function () {
        expect(app).toBeTruthy();
    });
});
//# sourceMappingURL=speaker-list.spec.js.map