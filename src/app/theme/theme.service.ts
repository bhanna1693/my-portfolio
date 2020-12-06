import {EventEmitter, Inject, Injectable} from '@angular/core';
import {ACTIVE_THEME, Theme, THEMES} from './theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeChange = new EventEmitter<Theme>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string
  ) {
  }

  getTheme(name: string): Theme {
    const theme = this.themes.find(t => t.name === name);
    if (!theme) {
      throw new Error(`Theme not found: '${name}'`);
    }
    return theme;
  }

  getActiveTheme(): Theme {
    return this.getTheme(this.theme);
  }

  getProperty(propName: string): any {
    return this.getActiveTheme().properties[propName];
  }

  setTheme(name: string): void {
    this.theme = name;
    this.themeChange.emit(this.getActiveTheme());
  }

  registerTheme(theme: Theme): void {
    this.themes.push(theme);
  }

  updateTheme(name: string, properties: { [key: string]: string; }): void {
    const theme = this.getTheme(name);
    theme.properties = {
      ...theme.properties,
      ...properties
    };

    if (name === this.theme) {
      this.themeChange.emit(theme);
    }
  }

}
