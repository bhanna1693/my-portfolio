import {Component, OnInit} from '@angular/core';
import {StarWarsStoreService} from './star-wars-store/star-wars-store.service';
import {DatasourceService} from './datasource/datasource.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DatasourceService]
})
export class TableComponent implements OnInit {

  constructor(private starWarsStore: StarWarsStoreService,
              private datasourceService: DatasourceService) {
  }

  get allPeople$() {
    return this.starWarsStore.people$;
  }

  ngOnInit(): void {
    this.starWarsStore.getAllPeople();

    this.allPeople$.subscribe(people => {
      this.datasourceService.setData(people);
    });

  }

}
