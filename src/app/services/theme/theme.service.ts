import {Inject, Injectable} from '@angular/core';
import * as tinycolor from 'tinycolor2';
import {ColorInput} from 'tinycolor2';
import {DOCUMENT} from '@angular/common';

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  primaryColor = '#3f51b5';

  primaryColorPalette: Color[] = [];

  secondaryColor = '#e91e63';

  secondaryColorPalette: Color[] = [];

  uiTheme: 'light' | 'dark' = 'light';


  constructor(@Inject(DOCUMENT) private document: Document) {
    this.setUiTheme();
    this.savePrimaryColor();
    this.saveSecondaryColor();
  }


  savePrimaryColor(): void {
    this.primaryColorPalette = computeColors(this.primaryColor);

    for (const color of this.primaryColorPalette) {
      const key1 = `--theme-primary-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-primary-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }

  saveSecondaryColor(): void {
    this.secondaryColorPalette = computeColors(this.secondaryColor);

    for (const color of this.secondaryColorPalette) {
      const key1 = `--theme-secondary-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-secondary-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }

  setUiTheme(value: 'light' | 'dark' = 'light'): void {
    this.uiTheme = value;
    this.document.body.classList.remove('ui-light', 'ui-dark');
    this.document.body.classList.add('ui-' + this.uiTheme);
  }
}

function computeColors(hex: ColorInput): Color[] {
  return [
    getColorObject(tinycolor(hex).lighten(52), '50'),
    getColorObject(tinycolor(hex).lighten(37), '100'),
    getColorObject(tinycolor(hex).lighten(26), '200'),
    getColorObject(tinycolor(hex).lighten(12), '300'),
    getColorObject(tinycolor(hex).lighten(6), '400'),
    getColorObject(tinycolor(hex), '500'),
    getColorObject(tinycolor(hex).darken(6), '600'),
    getColorObject(tinycolor(hex).darken(12), '700'),
    getColorObject(tinycolor(hex).darken(18), '800'),
    getColorObject(tinycolor(hex).darken(24), '900'),
    getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
    getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
    getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
    getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
  ];
}

function getColorObject(value: ColorInput, name: string): Color {
  const c = tinycolor(value);
  return {
    name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}
