import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
import {PortalSidenavService} from '../shared/portal-sidenav/portal-sidenav.service';

// for top nav adjustments
const EXTRA_SMALL_WIDTH_BREAKPOINT = 767;

// for showing nav
const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {
  isScreenSmall$: Observable<boolean>;
  isExtraScreenSmall$: Observable<boolean>;
  @ViewChild('sidenav', {static: true}) private rightPanel!: MatSidenav;

  constructor(private panelService: PortalSidenavService,
              private breakpoints: BreakpointObserver) {
    this.isExtraScreenSmall$ =
      breakpoints.observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
        .pipe(map(breakpoint => breakpoint.matches));
    this.isScreenSmall$ = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }

  ngOnInit(): void {
    this.panelService.initialize(this.rightPanel);
  }

}

