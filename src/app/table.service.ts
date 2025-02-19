import { Injectable } from '@angular/core';
import { DATA_MOCK, HEADERS_MOCK } from './mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getData() : Observable<any[]> {
    return of(DATA_MOCK);
  }

  getHeaders() : any[] {
    return HEADERS_MOCK
  } 
}
