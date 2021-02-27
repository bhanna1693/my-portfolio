import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {NgModule} from '@angular/core';
import {ContainerComponent} from './container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'blog',
        loadChildren: () => import('../pages/blog/blog.module').then(m => m.BlogModule)
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
