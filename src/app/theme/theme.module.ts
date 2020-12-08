import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import {ThemeCustomizerComponent} from './theme-customizer/theme-customizer.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [ThemeCustomizerComponent],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ColorPickerModule,
    MaterialModule
  ]
})
export class ThemeModule { }
