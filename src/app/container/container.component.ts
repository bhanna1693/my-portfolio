import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ContainerSideNavService} from './container-side-nav.service';
import {MatSidenav} from '@angular/material/sidenav';
import {Portal} from '@angular/cdk/portal';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
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

  constructor(private panelService: ContainerSideNavService,
              breakpoints: BreakpointObserver) {
    this.isExtraScreenSmall$ =
      breakpoints.observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
        .pipe(map(breakpoint => breakpoint.matches));
    this.isScreenSmall$ = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches), tap(console.log));
  }

  get panelPortal$(): Observable<Portal<any>> {
    return this.panelService.panelPortal$;
  }

  ngOnInit(): void {
    this.panelService.sidenav = this.rightPanel;
  }

}

