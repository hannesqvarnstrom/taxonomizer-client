import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

const BACKEND_BASE_URL = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class TaxonomyService {
  private baseUrl = BACKEND_BASE_URL + 'plants'
  public plants?: Observable<any[]>
  constructor(private httpClient: HttpClient) {
  }

  private index(): Observable<any[]> {
    return this.httpClient.get<any>(this.baseUrl)
  }

  public initialize(): void {
    this.plants = this.index()
  }

}
