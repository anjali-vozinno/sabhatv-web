import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagelinkComponent } from './imagelink.component';

describe('ImagelinkComponent', () => {
  let component: ImagelinkComponent;
  let fixture: ComponentFixture<ImagelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
