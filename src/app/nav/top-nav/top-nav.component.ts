import {Component, OnInit} from '@angular/core';
import {NavStoreService} from '../nav-store.service';
import {Observable} from 'rxjs';
import {ThemeConfig, ThemeService} from '../../services/theme/theme.service';
import {NavItem} from '../../models/nav-item';
import {expandOnRender} from "../../animations/expand.animation";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [expandOnRender]
})
export class TopNavComponent implements OnInit {
  themePresets: Array<ThemeConfig & { label: string }> = [
    {
      label: 'Indigo & Pink',
      primary: '#3f51b5',
      accent: '#e91e63',
      warn: '#f44336',
      uiTheme: 'light'
    },
    {
      label: 'Pink & Blue Grey',
      primary: '#e91e63',
      accent: '#607d8b',
      warn: '#f44336',
      uiTheme: 'dark'
    }
  ];

  constructor(private navStore: NavStoreService,
              private themeService: ThemeService) {
  }

  get isExpanded$(): Observable<boolean> {
    return this.navStore.isExpanded$;
  }

  get navItems$(): Observable<NavItem[]> {
    return this.navStore.navItems$;
  }

  ngOnInit(): void {
  }

  toggleExpandedState(): void {
    this.navStore.setIsExpanded(!this.navStore.getIsExpanded());
  }

  close(): void {
    this.navStore.setIsExpanded(false);
  }

  setThemeToPresetOption(themePreset: ThemeConfig): void {
    this.themeService.setThemeConfig(themePreset);
  }
}
