import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StarWarsPeopleDTO} from '../../models/star-wars-people-dto';

const apiUrl = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class StarWarsControllerService {

  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<StarWarsPeopleDTO> {
    return this.http.get<StarWarsPeopleDTO>(apiUrl + '/people');
  }
}
