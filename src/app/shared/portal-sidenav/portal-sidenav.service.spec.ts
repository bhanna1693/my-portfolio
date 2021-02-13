import { TestBed } from '@angular/core/testing';

import { PortalSidenavService } from './portal-sidenav.service';

describe('PortalSidenavService', () => {
  let service: PortalSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
