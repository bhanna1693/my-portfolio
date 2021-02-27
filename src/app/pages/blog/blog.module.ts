import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {BlogHomeComponent} from './blog-home/blog-home.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {MaterialModule} from '../../shared/material/material.module';
import {BlogListComponent} from './blog-home/blog-list/blog-list.component';
import {BlogItemComponent} from './blog-home/blog-list/blog-item/blog-item.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogHomeComponent,
    BlogDetailComponent,
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule
  ]
})
export class BlogModule {
}
