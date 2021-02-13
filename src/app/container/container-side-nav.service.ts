import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MatDrawerToggleResult, MatSidenav} from '@angular/material/sidenav';
import {ComponentPortal, ComponentType, Portal} from '@angular/cdk/portal';
import {debounceTime, shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContainerSideNavService {
  /** The panel. */
  sidenav!: MatSidenav;
  private viewContainerRef!: ViewContainerRef;
  // Note: The Portal class requires that a generic is specified for the component/template type.
  private _panelPortal$ = new Subject<ComponentPortal<any>>();
  readonly panelPortal$: Observable<ComponentPortal<any>> = this._panelPortal$.asObservable()
    .pipe(
      // debounceTime necessary to avoid ExpressionChangedAfterChecked error
      debounceTime(0),
      tap(console.log),
      shareReplay()
    );

  constructor() {
  }

  /** Sets the view container ref needed for {@link #setPanelContent}. */
  setViewContainerRef(vcr: ViewContainerRef): void {
    this.viewContainerRef = vcr;
  }

  /** Sets the panel portal to the specified portal. */
  setPanelPortal(panelPortal: ComponentPortal<any>): void {
    this._panelPortal$.next(panelPortal);
  }

  /**
   * Sets the panel content.
   * @param componentOrTemplateRef The component/template reference used.
   * @see PanelService#setPanelPortal
   */
  // setPanelContent(componentOrTemplateRef: ComponentType<any> | TemplateRef<any>): void {
  setPanelContent(componentOrTemplateRef: ComponentType<any>): void {
    let portal: ComponentPortal<any>;
    // if (componentOrTemplateRef instanceof TemplateRef) {
    //   // const vcr = this.viewContainerRef ? this.viewContainerRef : null;
    //   portal = new TemplatePortal(componentOrTemplateRef, this.viewContainerRef);
    // } else {
    portal = new ComponentPortal(componentOrTemplateRef);
    // }
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
}
