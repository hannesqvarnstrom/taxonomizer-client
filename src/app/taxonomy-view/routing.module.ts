import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxonomyViewListComponent } from './taxonomy-view-list/taxonomy-view-list.component';

const routes: Routes = [
  {
    path: 'taxonomy',
    component: TaxonomyViewListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxonomyViewRoutingModule { }
