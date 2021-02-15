import { TestBed } from '@angular/core/testing';

import { StarWarsControllerService } from './star-wars-controller.service';

describe('StarWarsControllerService', () => {
  let service: StarWarsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
