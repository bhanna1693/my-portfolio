import {Component, OnInit} from '@angular/core';
import {NavStoreService} from '../nav-store.service';
import {Observable} from 'rxjs';
import {ThemeService} from '../../services/theme/theme.service';
import {NavItem} from '../../models/nav-item';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

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

  setUiTheme($event: MatButtonToggleChange): void {
    this.themeService.setUiTheme($event.value);
  }

  setThemeToPresetOption(presetTheme: 'default' | 'secondary'): void {
    if (presetTheme === 'default') {
      this.themeService.setUiTheme('light');
      this.themeService.primaryColor = '#3f51b5';
      this.themeService.secondaryColor = '#e91e63';
    } else {
      this.themeService.setUiTheme('dark');
      this.themeService.primaryColor = '#e91e63';
      this.themeService.secondaryColor = '#607d8b';
    }

    this.themeService.savePrimaryColor();
    this.themeService.saveSecondaryColor();
  }
}
