import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCouleursComponent } from './liste-couleurs.component';

describe('ListeCouleursComponent', () => {
  let component: ListeCouleursComponent;
  let fixture: ComponentFixture<ListeCouleursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCouleursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCouleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
