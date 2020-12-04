import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavStoreService {
  private _isExpanded$ = new BehaviorSubject<boolean>(false);
  isExpanded$ = this._isExpanded$.asObservable();

  constructor() {
  }

  getIsExpanded(): boolean {
    return this._isExpanded$.getValue();
  }

  setIsExpanded(boo: boolean): void {
    this._isExpanded$.next(boo);
  }
}
