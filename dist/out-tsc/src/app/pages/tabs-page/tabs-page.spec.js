import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { TabsPage } from './tabs-page';
describe('TabsPage', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TabsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the tabs page', function () {
        var fixture = TestBed.createComponent(TabsPage);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
//# sourceMappingURL=tabs-page.spec.js.map