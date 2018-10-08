import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewIndividualComponentPage} from './view-individual-component.page';

describe('ViewIndividualComponentPage', () => {
    let component: ViewIndividualComponentPage;
    let fixture: ComponentFixture<ViewIndividualComponentPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewIndividualComponentPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewIndividualComponentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
