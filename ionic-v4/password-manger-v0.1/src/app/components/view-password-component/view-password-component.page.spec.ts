import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPasswordComponentPage } from './view-password-component.page';

describe('ViewPasswordComponentPage', () => {
  let component: ViewPasswordComponentPage;
  let fixture: ComponentFixture<ViewPasswordComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPasswordComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPasswordComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
