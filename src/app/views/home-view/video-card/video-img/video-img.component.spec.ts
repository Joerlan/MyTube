/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideoImgComponent } from './video-img.component';

describe('VideoImgComponent', () => {
  let component: VideoImgComponent;
  let fixture: ComponentFixture<VideoImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
