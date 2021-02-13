import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MatDrawerToggleResult, MatSidenav} from '@angular/material/sidenav';
import {ComponentPortal, ComponentType, Portal, TemplatePortal} from '@angular/cdk/portal';
import {debounceTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContainerSideNavService {
  /** The panel. */
  sidenav!: MatSidenav;
  private viewContainerRef!: ViewContainerRef;
  // Note: The Portal class requires that a generic is specified for the component/template type.
  private _panelPortal$ = new Subject<Portal<any>>();
  readonly panelPortal$: Observable<Portal<any>> = this._panelPortal$.asObservable()
    .pipe(
      // debounceTime necessary to avoid ExpressionChangedAfterChecked error
      debounceTime(0)
    );

  constructor() {
  }

  /** Sets the view container ref needed for {@link #setPanelContent}. */
  setViewContainerRef(vcr: ViewContainerRef): void {
    this.viewContainerRef = vcr;
  }

  /** Sets the panel portal to the specified portal. */
  setPanelPortal(panelPortal: Portal<any>): void {
    this._panelPortal$.next(panelPortal);
  }

  /**
   * Sets the panel content.
   * @param componentOrTemplateRef The component/template reference used.
   * @see PanelService#setPanelPortal
   */
  setPanelContent(componentOrTemplateRef: ComponentType<any> | TemplateRef<any>): void {
    let portal: Portal<any>;
    if (componentOrTemplateRef instanceof TemplateRef) {
      // const vcr = this.viewContainerRef ? this.viewContainerRef : null;
      portal = new TemplatePortal(componentOrTemplateRef, this.viewContainerRef);
    } else {
      portal = new ComponentPortal(componentOrTemplateRef);
    }
    this._panelPortal$.next(portal);
  }

  /** Resets the current panel portal. */
  clearPanelPortal(): void {
    this._panelPortal$.next(undefined);
  }

  /** Opens the panel with optionally a portal to be set. */
  open(portal?: Portal<any>): Promise<MatDrawerToggleResult> {
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
}
