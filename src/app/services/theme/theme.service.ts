import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TinyColorHelper} from './tiny-color-helper';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

export type CssVariableType = '--theme-primary' | '--theme-accent' | '--theme-warn';
export type UiThemeType = 'light' | 'dark';

export interface ThemeConfig {
  primary: string;
  accent: string;
  warn: string;
  uiTheme: UiThemeType;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeConfig$: Observable<ThemeConfig>;
  private _primaryColor$ = new BehaviorSubject<string>('#3f51b5');
  private _accentColor$ = new BehaviorSubject<string>('#e91e63');
  private _warnColor$ = new BehaviorSubject<string>('#f44336');
  private _uiTheme$ = new BehaviorSubject<UiThemeType>('light');

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.subscribeToPrimaryColor();
    this.subscribeToAccentColor();
    this.subscribeToWarnColor();
    this.subscribeToUiTheme();
    this.themeConfig$ = this.getThemeConfig$();
  }

  setPrimaryColor(color: string): void {
    this._primaryColor$.next(color);
  }

  setAccentColor(color: string): void {
    this._accentColor$.next(color);
  }

  setUiTheme(uiTheme: UiThemeType): void {
    this._uiTheme$.next(uiTheme);
  }

  setWarnColor(color: string): void {
    this._warnColor$.next(color);
  }

  private getThemeConfig$(): Observable<ThemeConfig> {
    return combineLatest([
      this._primaryColor$,
      this._accentColor$,
      this._warnColor$,
      this._uiTheme$
    ]).pipe(
      map(([primary, accent, warn, uiTheme]) => {
        return {primary, accent, warn, uiTheme};
      }),
    );
  }

  private subscribeToPrimaryColor(): void {
    this._primaryColor$
      .pipe(map((color) => TinyColorHelper.computeColors(color)))
      .subscribe((paletteMap) => this.setCssVariables('--theme-primary', paletteMap));
  }

  private subscribeToAccentColor(): void {
    this._accentColor$
      .pipe(map((color) => TinyColorHelper.computeColors(color)))
      .subscribe((paletteMap) => this.setCssVariables('--theme-accent', paletteMap));
  }

  private subscribeToUiTheme(): void {
    this._uiTheme$.subscribe((uiTheme) => {
      this.document.body.classList.remove('ui-light', 'ui-dark');
      this.document.body.classList.add('ui-' + uiTheme);
    });
  }

  private setCssVariables(prefix: CssVariableType, paletteMap: Color[]): void {
    for (const color of paletteMap) {
      const themeKey = `${prefix}-${color.name}`;
      const themeValue = color.hex;
      const themeContrastKey = `${prefix}-contrast-${color.name}`;
      const themeContrastValue = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      this.document.documentElement.style.setProperty(themeKey, themeValue);
      this.document.documentElement.style.setProperty(themeContrastKey, themeContrastValue);
    }
  }

  private subscribeToWarnColor(): void {
    this._warnColor$
      .pipe(map((color) => TinyColorHelper.computeColors(color)))
      .subscribe((paletteMap) => this.setCssVariables('--theme-warn', paletteMap));
  }
}


