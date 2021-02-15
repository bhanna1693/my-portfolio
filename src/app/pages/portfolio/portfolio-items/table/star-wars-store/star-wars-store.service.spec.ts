import { TestBed } from '@angular/core/testing';

import { StarWarsStoreService } from './star-wars-store.service';

describe('StarWarsStoreService', () => {
  let service: StarWarsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
