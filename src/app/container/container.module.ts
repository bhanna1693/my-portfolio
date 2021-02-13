import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {NavModule} from '../shared/nav/nav.module';
import {ContainerRoutingModule} from './container-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    NavModule,
    MatSidenavModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule {
}
