import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioCategoryTilesComponent} from './portfolio-category-tiles/portfolio-category-tiles.component';
import {TableComponent} from './portfolio-items/table/table.component';
import {FormsComponent} from './portfolio-items/forms/forms.component';

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
      },
      {
        path: 'forms',
        component: FormsComponent
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
