import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TopNavComponent],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavModule { }
