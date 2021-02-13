import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioHeaderComponent} from './portfolio-header/portfolio-header.component';
import {MaterialModule} from '../shared/material/material.module';


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioHeaderComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule
  ]
})
export class PortfolioModule {
}
