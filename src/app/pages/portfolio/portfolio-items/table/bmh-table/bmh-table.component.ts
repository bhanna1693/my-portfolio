import {Component, OnInit} from '@angular/core';
import {DatasourceService} from '../datasource/datasource.service';

@Component({
  selector: 'app-bmh-table',
  templateUrl: './bmh-table.component.html',
  styleUrls: ['./bmh-table.component.scss']
})
export class BmhTableComponent implements OnInit {

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

}
