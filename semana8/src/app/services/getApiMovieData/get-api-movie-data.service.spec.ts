import { TestBed } from '@angular/core/testing';

import { GetApiMovieDataService } from './get-api-movie-data.service';

describe('GetApiMovieDataService', () => {
  let service: GetApiMovieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiMovieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
