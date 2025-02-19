import { TestBed } from '@angular/core/testing';

import { TableServiceService } from './table.service';

describe('TableServiceService', () => {
  let service: TableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
