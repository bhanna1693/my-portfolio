import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavComponent} from './top-nav/top-nav.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {ThemePickerModule} from '../shared/theme-picker/theme-picker.module';


@NgModule({
  declarations: [TopNavComponent],
  exports: [
    TopNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ThemePickerModule
  ]
})
export class NavModule {
}
