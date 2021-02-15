import {Injectable} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Injectable()
export class DatasourceService {
  datasource = new MatTableDataSource([]);

  constructor() {
  }
}
