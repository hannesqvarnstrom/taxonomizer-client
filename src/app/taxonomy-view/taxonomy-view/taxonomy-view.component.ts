import { Component, Input, OnInit } from '@angular/core';
import { View } from '../taxonomy-view-list/taxonomy-view-list.component';

@Component({
  selector: 'app-taxonomy-view',
  templateUrl: './taxonomy-view.component.html',
  styleUrls: ['./taxonomy-view.component.scss']
})
export class TaxonomyViewComponent implements OnInit {
  @Input('view') view?: View
  constructor() { }

  ngOnInit(): void {
  }

}
