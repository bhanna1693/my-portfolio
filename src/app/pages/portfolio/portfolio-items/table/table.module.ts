import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { BmhTableComponent } from './bmh-table/bmh-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableFilterComponent } from './table-filter/table-filter.component';
import {MaterialModule} from '../../../../shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent,
    BmhTableComponent,
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    MatPaginatorModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TableModule {
}
