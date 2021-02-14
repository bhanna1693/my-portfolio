import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioHeaderComponent} from './portfolio-header/portfolio-header.component';
import {MaterialModule} from '../../shared/material/material.module';
import { PortfolioCategoryTilesComponent } from './portfolio-category-tiles/portfolio-category-tiles.component';
import { PortfolioNavComponent } from './portfolio-nav/portfolio-nav.component';
import {PortalSidenavModule} from '../../shared/portal-sidenav/portal-sidenav.module';


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioHeaderComponent,
    PortfolioCategoryTilesComponent,
    PortfolioNavComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule,
    PortalSidenavModule
  ]
})
export class PortfolioModule {
}
