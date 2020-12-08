import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TinyColorHelper} from './tiny-color-helper';

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

  uiTheme: 'light' | 'dark';


  constructor(@Inject(DOCUMENT) private document: Document) {
    this.uiTheme = 'light';
    this.setUiTheme(this.uiTheme);
    this.savePrimaryColor();
    this.saveSecondaryColor();
  }


  savePrimaryColor(): void {
    this.primaryColorPalette = TinyColorHelper.computeColors(this.primaryColor);

    for (const color of this.primaryColorPalette) {
      const key1 = `--theme-primary-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-primary-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      this.document.documentElement.style.setProperty(key1, value1);
      this.document.documentElement.style.setProperty(key2, value2);
    }
  }

  saveSecondaryColor(): void {
    this.secondaryColorPalette = TinyColorHelper.computeColors(this.secondaryColor);

    for (const color of this.secondaryColorPalette) {
      const key1 = `--theme-secondary-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-secondary-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      this.document.documentElement.style.setProperty(key1, value1);
      this.document.documentElement.style.setProperty(key2, value2);
    }
  }

  setUiTheme(value: 'light' | 'dark' = 'light'): void {
    this.uiTheme = value;
    this.document.body.classList.remove('ui-light', 'ui-dark');
    this.document.body.classList.add('ui-' + this.uiTheme);
  }
}


