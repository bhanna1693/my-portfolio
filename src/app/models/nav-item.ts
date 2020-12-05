import {ThemePalette} from '@angular/material/core';

export interface NavItem {
  label: string;
  link: string;
  classListLg: string[];
  classListSm: string[];
  btnColor: ThemePalette | null;
}
