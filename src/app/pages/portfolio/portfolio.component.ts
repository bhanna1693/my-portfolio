import {Component, OnInit, ViewChild} from '@angular/core';
import {PageTitleService} from '../../services/page-title/page-title.service';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {PortalSidenavService} from '../../shared/portal-sidenav/portal-sidenav.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

// The MEDIUM_WIDTH_BREAKPOINT is used to determine state fixedTopGap
// (adjusting sidenav to the top nav UI change)
const MEDIUM_WIDTH_BREAKPOINT = 768;
// The LARGE_WIDTH_BREAKPOINT is used to determine state: opened/mode/fixedInViewport
const LARGE_WIDTH_BREAKPOINT = 992;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  isLargeScreen$: Observable<boolean>;
  isMediumScreen$: Observable<boolean>;
  @ViewChild('sidenav', {static: true}) private rightPanel!: MatSidenav;

  constructor(private breakpoints: BreakpointObserver,
              private title: PageTitleService) {
    this.isMediumScreen$ =
      breakpoints.observe(`(min-width: ${MEDIUM_WIDTH_BREAKPOINT}px)`)
        .pipe(map(breakpoint => breakpoint.matches));
    this.isLargeScreen$ = breakpoints.observe(`(min-width: ${LARGE_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }

  ngOnInit(): void {
    this.title.title = 'My Portfolio';
  }

}
