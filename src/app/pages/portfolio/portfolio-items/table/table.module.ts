import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { BmhTableComponent } from './bmh-table/bmh-table.component';


@NgModule({
  declarations: [
    TableComponent,
    BmhTableComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule
  ]
})
export class TableModule {
}
