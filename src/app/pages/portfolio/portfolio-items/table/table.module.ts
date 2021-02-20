import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { BmhTableComponent } from './bmh-table/bmh-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    TableComponent,
    BmhTableComponent
  ],
    imports: [
        CommonModule,
        CdkTableModule,
        MatPaginatorModule
    ]
})
export class TableModule {
}
