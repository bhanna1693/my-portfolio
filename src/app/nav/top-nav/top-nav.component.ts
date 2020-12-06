import {Component, OnInit} from '@angular/core';
import {NavStoreService} from '../nav-store.service';
import {Observable} from 'rxjs';
import {ThemeService} from '../../theme/theme.service';

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

  get navItems$() {
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

  toggleTheme(): void {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
