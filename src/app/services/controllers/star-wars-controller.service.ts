import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {StarWarsPeopleDTO} from '../../models/star-wars-people-dto';
import {switchMap} from 'rxjs/operators';

const apiUrl = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class StarWarsControllerService {

  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<StarWarsPeopleDTO> {
    return this.http.get<StarWarsPeopleDTO>(apiUrl + '/people')
      .pipe(
        switchMap((resp) => {
          if (resp.next) {
            // return of(resp);
            return this.getNextPagePageAndConcatIntoResults(resp);
          } else {
            return of(resp);
          }
        })
      );
  }

  private getNextPagePageAndConcatIntoResults(initialResponse: StarWarsPeopleDTO): Observable<StarWarsPeopleDTO> {
    return this.http.get<StarWarsPeopleDTO>(initialResponse.next).pipe(
      switchMap(nextResp => {
        if (nextResp.next) {
          initialResponse.results.concat(nextResp.results);
          return this.getNextPagePageAndConcatIntoResults(nextResp);
        } else {
          return of(initialResponse);
        }
      })
    );
  }
}
