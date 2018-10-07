import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPasswordListComponentPage } from './view-password-list-component.page';

describe('ViewPasswordListComponentPage', () => {
  let component: ViewPasswordListComponentPage;
  let fixture: ComponentFixture<ViewPasswordListComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPasswordListComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPasswordListComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
