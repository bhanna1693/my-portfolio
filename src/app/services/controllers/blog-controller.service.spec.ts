import { TestBed } from '@angular/core/testing';

import { BlogControllerService } from './blog-controller.service';

describe('BlogControllerService', () => {
  let service: BlogControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
