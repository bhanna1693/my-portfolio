import {Injectable} from '@angular/core';
import {StarWarsControllerService} from '../../../../../services/controllers/star-wars-controller.service';
import {BehaviorSubject} from 'rxjs';
import {Result} from '../../../../../models/star-wars-people-dto';

@Injectable({
  providedIn: 'root'
})
export class StarWarsStoreService {
  private _people = new BehaviorSubject<Result[]>([]);
  people$ = this._people.asObservable();

  constructor(private starWarsControllerService: StarWarsControllerService) {
  }

  getAllPeople() {
    this.starWarsControllerService.getAllPeople()
      .subscribe((resp) => this._people.next(resp.results));
  }
}
