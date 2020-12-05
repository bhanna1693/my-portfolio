import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [TopNavComponent],
  exports: [
    TopNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class NavModule { }
