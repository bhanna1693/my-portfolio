import {Component, OnInit} from '@angular/core';
import {NavStoreService} from '../nav-store.service';
import {Observable} from 'rxjs';
import {ThemeService} from '../../services/theme/theme.service';
import {NavItem} from '../../models/nav-item';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
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

  toggleTheme($event: MatSlideToggleChange): void {
    if (this.themeService.primaryColor === '#3f51b5') {
      this.themeService.primaryColor = 'green';
      this.themeService.secondaryColor = 'yellow';
      this.themeService.savePrimaryColor();
      this.themeService.saveSecondaryColor();
    } else {
      this.themeService.primaryColor = '#3f51b5';
      this.themeService.secondaryColor = '#e91e63';
      this.themeService.savePrimaryColor();
      this.themeService.saveSecondaryColor();
    }

  }

  setUiTheme($event: MatButtonToggleChange): void {
    this.themeService.setUiTheme($event.value);
  }

  setTheme(primary: string, accent: string): void {
    this.themeService.primaryColor = primary;
    this.themeService.secondaryColor = accent;
    this.themeService.savePrimaryColor();
    this.themeService.saveSecondaryColor();
  }
}
