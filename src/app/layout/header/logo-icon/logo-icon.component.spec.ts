/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoIconComponent } from './logo-icon.component';

describe('LogoIconComponent', () => {
  let component: LogoIconComponent;
  let fixture: ComponentFixture<LogoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
