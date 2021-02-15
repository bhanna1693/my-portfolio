import {Component, OnInit} from '@angular/core';
import {StarWarsStoreService} from './star-wars-store/star-wars-store.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private starWarsStore: StarWarsStoreService) {
  }

  ngOnInit(): void {
    this.starWarsStore.getAllPeople();
  }

}
