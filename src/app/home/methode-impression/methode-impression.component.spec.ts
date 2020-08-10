import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodeImpressionComponent } from './methode-impression.component';

describe('MethodeImpressionComponent', () => {
  let component: MethodeImpressionComponent;
  let fixture: ComponentFixture<MethodeImpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodeImpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodeImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
