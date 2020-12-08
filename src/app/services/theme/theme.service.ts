import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TinyColorHelper} from './tiny-color-helper';
import {BehaviorSubject} from 'rxjs';
import {ColorInput} from 'tinycolor2';
import {map} from 'rxjs/operators';

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

export type CssVariableType = '--theme-primary' | '--theme-accent';
export type UiThemeType = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _primaryColor$ = new BehaviorSubject<ColorInput>('#3f51b5');
  primaryColor$ = this._primaryColor$.asObservable();
  private _accentColor$ = new BehaviorSubject<ColorInput>('#e91e63');
  accentColor$ = this._accentColor$.asObservable();
  private _uiTheme$ = new BehaviorSubject<UiThemeType>('light');
  uiTheme$ = this._uiTheme$.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.subscribeToPrimaryColor();
    this.subscribeToAccentColor();
    this.subscribeToUiTheme();
  }

  setPrimaryColor(color: ColorInput): void {
    this._primaryColor$.next(color);
  }

  setAccentColor(color: ColorInput): void {
    this._accentColor$.next(color);
  }

  setUiTheme(uiTheme: UiThemeType): void {
    this._uiTheme$.next(uiTheme);
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
}


