import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioCategoryTilesComponent} from './portfolio-category-tiles/portfolio-category-tiles.component';
import {TableComponent} from './portfolio-items/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        component: PortfolioCategoryTilesComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
