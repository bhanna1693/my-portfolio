import {Injectable} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Result} from '../../../../../models/star-wars-people-dto';
import {FilterForm} from '../filter-form/filter-form.service';

@Injectable()
export class DatasourceService {
  datasource = new MatTableDataSource<Result>([]);
  displayedColumns: string[] = ['name', 'homeworld', 'species'];

  constructor() {
    this.datasource.filterPredicate = this.setFilterPredicate();
  }

  setData(people: Result[]) {
    this.datasource.data = people;
  }

  applyFilter(filterForm: FilterForm) {
    this.datasource.filter = JSON.stringify(filterForm);
  }

  private setFilterPredicate(): (data: Result, filter: string) => boolean {
    return (data: Result, filter: string): boolean => {
      const parsedFilter: FilterForm = JSON.parse(filter);
      const match: boolean[] = [];

      Object.entries(parsedFilter).forEach(([key, value]) => {
        const v = value?.toString().toLowerCase()?.trim();
        if (!v) {
          match.push(true);
        } else {
          switch (key) {
            case 'name':
              match.push(data.name.toLowerCase().trim().includes(v));
              break;
            default:
              // @ts-ignore
              match.push(data[key].toString().toLowerCase().trim().includes(v));
              break;
          }
        }
      });

      return match.every(Boolean);
    };
  }
}
