import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavItem} from '../models/nav-item';

@Injectable({
  providedIn: 'root'
})
export class NavStoreService {
  private _isExpanded$ = new BehaviorSubject<boolean>(false);
  isExpanded$ = this._isExpanded$.asObservable();

  private _navItems$ = new BehaviorSubject<NavItem[]>([]);
  navItems$ = this._navItems$.asObservable();

  constructor() {
    const navItems: NavItem[] = [
      {
        link: '/portfolio',
        label: 'My Portfolio',
        classListLg: ['ml-auto'],
        classListSm: [],
        btnColor: null
      },
      {
        link: '/contact',
        label: 'Say Hello',
        classListLg: ['btn-outline-primary'],
        classListSm: ['btn-outline-primary'],
        btnColor: 'primary'
      },
    ];
    this.setNavItems(navItems);
  }

  getIsExpanded(): boolean {
    return this._isExpanded$.getValue();
  }

  setIsExpanded(boo: boolean): void {
    this._isExpanded$.next(boo);
  }

  setNavItems(items: NavItem[]): void {
    this._navItems$.next(items);
  }
}
