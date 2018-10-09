import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLoadComponentPage } from './save-load-component.page';

describe('SaveLoadComponentPage', () => {
  let component: SaveLoadComponentPage;
  let fixture: ComponentFixture<SaveLoadComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveLoadComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveLoadComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
