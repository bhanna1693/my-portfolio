import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalSidenavComponent} from './portal-sidenav/portal-sidenav.component';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [
    PortalSidenavComponent
  ],
  exports: [
    PortalSidenavComponent
  ],
  imports: [
    CommonModule,
    PortalModule
  ]
})
export class PortalSidenavModule {
}
