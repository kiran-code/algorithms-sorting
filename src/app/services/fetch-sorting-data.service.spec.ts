import { TestBed } from '@angular/core/testing';

import { FetchSortingDataService } from './fetch-sorting-data.service';

describe('FetchSortingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchSortingDataService = TestBed.get(FetchSortingDataService);
    expect(service).toBeTruthy();
  });
});
