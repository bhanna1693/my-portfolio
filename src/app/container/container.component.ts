import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
import {PortalSidenavService} from '../shared/portal-sidenav/portal-sidenav.service';

// The MEDIUM_WIDTH_BREAKPOINT is used to determine state fixedTopGap
// (adjusting sidenav to the top nav UI change)
const MEDIUM_WIDTH_BREAKPOINT = 768;
// The LARGE_WIDTH_BREAKPOINT is used to determine state: opened/mode/fixedInViewport
const LARGE_WIDTH_BREAKPOINT = 992;

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {
  isLargeScreen: Observable<boolean>;
  isMediumScreen$: Observable<boolean>;
  @ViewChild('sidenav', {static: true}) private rightPanel!: MatSidenav;

  constructor(private panelService: PortalSidenavService,
              private breakpoints: BreakpointObserver) {
    this.isMediumScreen$ =
      breakpoints.observe(`(min-width: ${MEDIUM_WIDTH_BREAKPOINT}px)`)
        .pipe(map(breakpoint => breakpoint.matches));
    this.isLargeScreen = breakpoints.observe(`(min-width: ${LARGE_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }

  ngOnInit(): void {
    this.panelService.initialize(this.rightPanel);
  }

}

