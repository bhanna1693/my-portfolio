import {Component, OnInit} from '@angular/core';
import {StarWarsStoreService} from './star-wars-store/star-wars-store.service';
import {DatasourceService} from './datasource/datasource.service';
import {FilterForm, FilterFormService} from './filter-form/filter-form.service';
import {debounceTime, startWith} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Observable} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DatasourceService, FilterFormService]
})
export class TableComponent implements OnInit {

  constructor(private starWarsStore: StarWarsStoreService,
              private datasourceService: DatasourceService,
              private filterFormService: FilterFormService) {
  }

  get allPeople$() {
    return this.starWarsStore.people$;
  }

  get filterForm() {
    return this.filterFormService.filterForm;
  }

  ngOnInit(): void {
    this.starWarsStore.getAllPeople();

    this.allPeople$
      .pipe(untilDestroyed(this))
      .subscribe((people) => this.datasourceService.setData(people));

    (this.filterForm.valueChanges as Observable<FilterForm>)
      .pipe(
        untilDestroyed(this),
        debounceTime(50),
        startWith(this.filterForm.getRawValue())
      )
      .subscribe((filterForm) => this.datasourceService.applyFilter(filterForm));
  }

}
