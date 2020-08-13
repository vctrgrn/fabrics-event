import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeProduitsComponent } from './page-liste-produits.component';

describe('PageListeProduitsComponent', () => {
  let component: PageListeProduitsComponent;
  let fixture: ComponentFixture<PageListeProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListeProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
