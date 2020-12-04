import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ScreenSizeService} from '../services/screen-size/screen-size.service';

@Injectable({
  providedIn: 'root'
})
export class NavStoreService {
  private _isExpanded$ = new BehaviorSubject<boolean>(false);
  isExpanded$ = this._isExpanded$.asObservable();

  constructor(private screenSizeService: ScreenSizeService) {
    this._isExpanded$.next(this.screenSizeService.getScreenSizeLg());
  }

  getIsExpanded(): boolean {
    return this._isExpanded$.getValue();
  }

  setIsExpanded(boo: boolean): void {
    this._isExpanded$.next(boo);
  }
}
