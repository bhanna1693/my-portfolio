import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {StarWarsPeopleDTO} from '../../models/star-wars-people-dto';
import {map, switchMap} from 'rxjs/operators';

const apiUrl = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class StarWarsControllerService {

  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<StarWarsPeopleDTO> {
    return this.http.get<StarWarsPeopleDTO>(apiUrl + '/people')
      .pipe(switchMap((peopleDTO) => this.getNextPagePageAndConcatIntoResults(peopleDTO)));
  }

  private getNextPagePageAndConcatIntoResults(peopleDTO: StarWarsPeopleDTO): Observable<StarWarsPeopleDTO> {
    if (peopleDTO.next) {
      return this.http.get<StarWarsPeopleDTO>(peopleDTO.next).pipe(
        map((nextResp) => {
          peopleDTO.results = peopleDTO.results.concat(nextResp.results);
          peopleDTO.next = nextResp.next;
          peopleDTO.previous = nextResp.previous;
          return peopleDTO;
        }),
        switchMap((nextResp) => this.getNextPagePageAndConcatIntoResults(peopleDTO))
      );
    }

    return of(peopleDTO);
  }
}
