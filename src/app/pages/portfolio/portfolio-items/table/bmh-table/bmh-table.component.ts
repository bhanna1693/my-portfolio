import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DatasourceService} from '../datasource/datasource.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-bmh-table',
  templateUrl: './bmh-table.component.html',
  styleUrls: ['./bmh-table.component.scss']
})
export class BmhTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private datasourceService: DatasourceService) {
  }

  get dataSource() {
    return this.datasourceService.datasource;
  }

  get displayedColumns() {
    return this.datasourceService.displayedColumns;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
