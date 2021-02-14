import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table-example/table/table.component';
import {TableExampleComponent} from './table-example/table-example.component';
import {CdkTableModule} from '@angular/cdk/table';


@NgModule({
  declarations: [
    TableExampleComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule
  ]
})
export class TableModule {
}
