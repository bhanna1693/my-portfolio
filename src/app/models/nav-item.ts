import {ThemePalette} from '@angular/material/core';

export interface NavItem {
  label: string;
  link: string;
  classList: string[];
  btnColor: ThemePalette | null;
}
