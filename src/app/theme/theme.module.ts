import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import {ThemeCustomizerComponent} from './theme-customizer/theme-customizer.component';


@NgModule({
  declarations: [ThemeCustomizerComponent],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
