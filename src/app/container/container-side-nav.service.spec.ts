import { TestBed } from '@angular/core/testing';

import { ContainerSideNavService } from './container-side-nav.service';

describe('ContainerSideNavService', () => {
  let service: ContainerSideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerSideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
