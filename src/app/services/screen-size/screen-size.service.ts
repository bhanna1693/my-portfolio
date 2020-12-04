import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {debounceTime, startWith} from 'rxjs/operators';

enum SCREEN {
  SM = 540,
  MD = 768,
  LG = 992,
  XL = 1200
}

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private _screenSizeLg$ = new BehaviorSubject<boolean>(false);
  screenSizeLg$ = this._screenSizeLg$.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        startWith('init'),
        debounceTime(50),
      )
      .subscribe(() => {
        this._screenSizeLg$.next(this.isScreenSizeLargerThan(SCREEN.LG));
      });
  }

  getScreenSizeLg(): boolean {
    return this._screenSizeLg$.getValue();
  }

  private isScreenSizeLargerThan(num: number): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width >= num;
  }
}
