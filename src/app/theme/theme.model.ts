import { InjectionToken } from '@angular/core';

export const THEMES = new InjectionToken<any[]>('THEMES');
export const ACTIVE_THEME = new InjectionToken<string>('ACTIVE_THEME');

export interface Theme {
  name: string;
  properties: ThemeProperties;
}

export interface ThemeOptions {
  themes: Theme[];
  active: string;
}

interface ThemeProperties {
  '--background': string;
  '--on-background': string;
  '--primary': string;
  '--on-primary': string;
  '--secondary': string;
  '--on-secondary': string;
  '--surface': string;
  '--on-surface': string;
  '--error': string;
  '--on-error': string;
}
