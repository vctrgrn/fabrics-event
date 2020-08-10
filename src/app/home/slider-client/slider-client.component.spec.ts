import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderClientComponent } from './slider-client.component';

describe('SliderClientComponent', () => {
  let component: SliderClientComponent;
  let fixture: ComponentFixture<SliderClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
