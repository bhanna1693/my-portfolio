import {Component, OnInit, ViewChild} from '@angular/core';
import {PageTitleService} from '../../services/page-title/page-title.service';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {filter, finalize, map, startWith} from 'rxjs/operators';
import {PortfolioItem, portfolioItems} from './portfolio-nav/portfolio-nav.component';
import {NavigationEnd, Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

// The MEDIUM_WIDTH_BREAKPOINT is used to determine state fixedTopGap
// (adjusting sidenav to the top nav UI change)
const MEDIUM_WIDTH_BREAKPOINT = 768;
// The LARGE_WIDTH_BREAKPOINT is used to determine state: opened/mode/fixedInViewport
const LARGE_WIDTH_BREAKPOINT = 992;

@UntilDestroy()
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
              private title: PageTitleService,
              private router: Router) {
    this.isMediumScreen$ =
      breakpoints.observe(`(min-width: ${MEDIUM_WIDTH_BREAKPOINT}px)`)
        .pipe(map(breakpoint => breakpoint.matches));
    this.isLargeScreen$ = breakpoints.observe(`(min-width: ${LARGE_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }

  ngOnInit(): void {
    this.setTitleOnRouteChanges();
  }

  handleItemSelected($event: PortfolioItem) {
    // close sidenav if screen is small
    if (!this.breakpoints.isMatched(`(min-width: ${LARGE_WIDTH_BREAKPOINT}px)`)) {
      this.rightPanel.close();
    }
  }

  private setTitleOnRouteChanges() {
    this.router.events.pipe(
      untilDestroyed(this),
      filter(e => e instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
      finalize(() => this.title.title = '')
    )
      .subscribe(url => this.title.title = portfolioItems.find(p => p.route === url)?.name || 'My Portfolio');
  }
}
