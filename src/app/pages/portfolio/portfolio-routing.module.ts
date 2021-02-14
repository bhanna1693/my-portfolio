import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioCategoryTilesComponent} from './portfolio-category-tiles/portfolio-category-tiles.component';
import {TableExampleComponent} from './portfolio-items/table/table-example/table-example.component';

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
        component: TableExampleComponent
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
