import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [TopNavComponent, SideNavComponent],
  exports: [
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class NavModule { }
