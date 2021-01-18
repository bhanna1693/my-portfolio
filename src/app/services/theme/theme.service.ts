import {APP_INITIALIZER, Inject, Injectable, Provider} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TinyColorHelper} from './tiny-color-helper';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {debounceTime, map, tap} from 'rxjs/operators';
import {ThemePalette} from '@angular/material/core';
import {OnAppInit} from '../../models/on-app-init';

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

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
export class ThemeService implements OnAppInit {
  private _primaryColor$ = new BehaviorSubject<string>('#3f51b5');
  private _accentColor$ = new BehaviorSubject<string>('#e91e63');
  private _warnColor$ = new BehaviorSubject<string>('#f44336');
  private _uiTheme$ = new BehaviorSubject<UiThemeType>(this.getUiThemeOnInit());
  private _themeConfig$ = new BehaviorSubject<ThemeConfig>({
    uiTheme: this._uiTheme$.getValue(),
    primary: this._primaryColor$.getValue(),
    accent: this._accentColor$.getValue(),
    warn: this._warnColor$.getValue()
  });
  themeConfig$ = this._themeConfig$.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  onAppInit(): void {
    this.subscribeToPrimaryColor();
    this.subscribeToAccentColor();
    this.subscribeToWarnColor();
    this.subscribeToUiTheme();
    this.subscribeToAnyThemeChange();
  }

  setPrimaryColor(color: string): void {
    this._primaryColor$.next(color);
  }

  setAccentColor(color: string): void {
    this._accentColor$.next(color);
  }

  setWarnColor(color: string): void {
    this._warnColor$.next(color);
  }

  setUiTheme(uiTheme: UiThemeType): void {
    this._uiTheme$.next(uiTheme);
  }

  setThemeConfig(themePreset: ThemeConfig): void {
    this._primaryColor$.next(themePreset.primary);
    this._accentColor$.next(themePreset.accent);
    this._warnColor$.next(themePreset.warn);
    this._uiTheme$.next(themePreset.uiTheme);
  }

  private subscribeToPrimaryColor(): void {
    this._primaryColor$
      .pipe(map((color) => TinyColorHelper.computeColors(color)))
      .subscribe((paletteMap) => this.setCssVariables('primary', paletteMap));
  }

  private subscribeToAccentColor(): void {
    this._accentColor$
      .pipe(map((color) => TinyColorHelper.computeColors(color)))
      .subscribe((paletteMap) => this.setCssVariables('accent', paletteMap));
  }

  private subscribeToWarnColor(): void {
    this._warnColor$
      .pipe(map((color) => TinyColorHelper.computeColors(color)))
      .subscribe((paletteMap) => this.setCssVariables('warn', paletteMap));
  }

  private subscribeToUiTheme(): void {
    this._uiTheme$.subscribe((uiTheme) => {
      this.document.body.classList.remove('ui-light', 'ui-dark');
      this.document.body.classList.add('ui-' + uiTheme);
    });
  }

  private subscribeToAnyThemeChange(): void {
    combineLatest([
      this._primaryColor$,
      this._accentColor$,
      this._warnColor$,
      this._uiTheme$
    ]).pipe(
      debounceTime(5),
      map(([primary, accent, warn, uiTheme]) => {
        return {primary, accent, warn, uiTheme} as ThemeConfig;
      }),
      tap((themeConfig) => console.log('THEME CHANGED', themeConfig))
    ).subscribe((themeConfig) => this._themeConfig$.next(themeConfig));
  }


  private setCssVariables(prefix: ThemePalette, paletteMap: Color[]): void {
    for (const color of paletteMap) {
      const themeKey = `--${prefix}-${color.name}`;
      const themeValue = color.hex;
      const themeContrastKey = `--${prefix}-contrast-${color.name}`;
      // const themeContrastValue = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      const themeContrastValue = color.darkContrast ? '#212529' : 'white';
      this.document.documentElement.style.setProperty(themeKey, themeValue);
      this.document.documentElement.style.setProperty(themeContrastKey, themeContrastValue);
    }
  }


  private getUiThemeOnInit(): UiThemeType {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      return 'dark';
    } else {
      return 'light';
    }
  }
}

export const THEME_INITIALIZER: Provider[] = [
  ThemeService,
  {
    provide: APP_INITIALIZER,
    useFactory: (s: ThemeService) => () => s.onAppInit(),
    deps: [ThemeService],
    multi: true
  }
];



