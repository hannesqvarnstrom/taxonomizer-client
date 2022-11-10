import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxonomyViewListComponent } from './taxonomy-view-list/taxonomy-view-list.component';
import { TaxonomyViewComponent } from './taxonomy-view/taxonomy-view.component';
import { TaxonomyViewRoutingModule } from './routing.module';



@NgModule({
  declarations: [
    TaxonomyViewListComponent,
    TaxonomyViewComponent
  ],
  imports: [
    CommonModule,
    TaxonomyViewRoutingModule
  ]
})
export class TaxonomyViewModule { }
