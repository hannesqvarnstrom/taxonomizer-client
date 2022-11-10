import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomyViewListComponent } from './taxonomy-view-list.component';

describe('TaxonomyViewListComponent', () => {
  let component: TaxonomyViewListComponent;
  let fixture: ComponentFixture<TaxonomyViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxonomyViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxonomyViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
