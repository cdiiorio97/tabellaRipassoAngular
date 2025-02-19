import { Injectable } from '@angular/core';
import { DATA_MOCK, HEADERS_MOCK } from './mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getData() : Observable<any[]>{
    const data = of(DATA_MOCK);
    return data;
  }

  getHeaders() : Observable<any[]>{
    const headers = of(HEADERS_MOCK);
    return headers;
  } 
}
