import {Injectable} from '@angular/core';
import {MatDrawerToggleResult, MatSidenav} from '@angular/material/sidenav';
import {merge, Observable, Subject} from 'rxjs';
import {ComponentPortal, ComponentType} from '@angular/cdk/portal';
import {filter, map, shareReplay, startWith} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {PortfolioNavComponent} from '../../pages/portfolio/portfolio-nav/portfolio-nav.component';

@Injectable({
  providedIn: 'root'
})
export class PortalSidenavService {
  /** The panel. */
  sidenav!: MatSidenav;
  // Note: The Portal class requires that a generic is specified for the component/template type.
  private _panelPortal$ = new Subject<ComponentPortal<any>>();
  readonly panelPortal$: Observable<ComponentPortal<any> | null> = merge(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      startWith('init'),
      map(() => {
        // return new ComponentPortal() instance or return null and close sidenav
        const url = this.router.url;
        if (url.includes('/portfolio')) {
          console.log('Portfolio sidenav portal');
          return new ComponentPortal(PortfolioNavComponent);
        }

        // setTimeout needed to prevent ExpressionChangedAfterChecked
        setTimeout(() => this.sidenav?.close());
        return null;
      }),
      shareReplay()
    ),
    this._panelPortal$.asObservable()
  );

  constructor(private router: Router) {
  }


  /** Sets the panel portal to the specified portal. */
  setPanelPortal(panelPortal: ComponentPortal<any>): void {
    this._panelPortal$.next(panelPortal);
  }

  /**
   * Sets the panel content.
   * @param componentType The component/template reference used.
   * @see setPanelPortal
   */
  setPanelContent(componentType: ComponentType<any>): void {
    const portal = new ComponentPortal(componentType);

    this._panelPortal$.next(portal);
  }

  /** Resets the current panel portal. */
  clearPanelPortal(): void {
    this._panelPortal$.next(undefined);
  }

  /** Opens the panel with optionally a portal to be set. */
  open(portal?: ComponentPortal<any>): Promise<MatDrawerToggleResult> {
    if (portal) {
      this._panelPortal$.next(portal);
    }
    return this.sidenav.open();
  }

  /** Toggles the panel. */
  toggle(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle();
  }

  /** Closes the panel. */
  close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }

  initialize(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }
}
