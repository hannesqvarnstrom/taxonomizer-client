import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomyViewComponent } from './taxonomy-view.component';

describe('TaxonomyViewComponent', () => {
  let component: TaxonomyViewComponent;
  let fixture: ComponentFixture<TaxonomyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxonomyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxonomyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
