import {Injectable} from '@angular/core';
import {StarWarsControllerService} from '../../../../../services/controllers/star-wars-controller.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsStoreService {
  _people = new BehaviorSubject([]);
  people$ = this._people.asObservable();

  constructor(private starWarsControllerService: StarWarsControllerService) {
  }

  getAllPeople() {
    this.starWarsControllerService.getAllPeople()
      .subscribe((resp) => {
        this._people.next(resp);
      });
  }
}
