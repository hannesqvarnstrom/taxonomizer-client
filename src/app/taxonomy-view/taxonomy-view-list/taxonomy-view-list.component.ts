import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaxonomyService } from 'src/app/taxonomy.service';
import DB from '../../../../data'

@Component({
  selector: 'app-taxonomy-view-list',
  templateUrl: './taxonomy-view-list.component.html',
  styleUrls: ['./taxonomy-view-list.component.scss']
})
export class TaxonomyViewListComponent implements OnInit {
  taxonomyViews: View[] = []
  plants?: any[]

  showing: string = ''
  constructor(private taxonomyService: TaxonomyService) { }

  ngOnInit(): void {
    this.taxonomyViews = DB.taxonomy_views
    this.taxonomyService.initialize()
    this.taxonomyService.plants?.subscribe(plants => {
      console.log('hej', plants)
      this.plants = plants.plants
    })
  }

  toggle(view: View) {
    this.showing = view.title === this.showing ? '' : view.title
  }

  refreshPlants() {

  }
}

export interface View {
  title: string
}
