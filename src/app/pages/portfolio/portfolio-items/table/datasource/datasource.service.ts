import {Injectable} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Result} from '../../../../../models/star-wars-people-dto';

@Injectable()
export class DatasourceService {
  datasource = new MatTableDataSource<Result>([]);
  displayedColumns: string[] = ['name', 'homeworld', 'species'];

  constructor() {
  }

  setData(people: Result[]) {
    this.datasource.data = people;
  }
}
