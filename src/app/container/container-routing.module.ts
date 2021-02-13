import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {NgModule} from '@angular/core';
import {ContainerComponent} from './container.component';
import {PortfolioNavComponent} from '../pages/portfolio/portfolio-nav/portfolio-nav.component';
import {PortfolioCategoryTilesComponent} from '../pages/portfolio/portfolio-category-tiles/portfolio-category-tiles.component';

const sideNavRoutes: Routes = [
  // {path: '', component: PortfolioNavComponent, outlet: 'side'},
  // {path: 'contact', component: ThemePickerComponent, outlet: 'side'},
  {path: 'portfolio-list', component: PortfolioCategoryTilesComponent, outlet: 'side'},
];

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      ...sideNavRoutes,
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('../pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule {
}
