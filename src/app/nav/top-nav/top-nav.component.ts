import {Component, OnInit} from '@angular/core';
import {NavStoreService} from '../nav-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private navStore: NavStoreService) {
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
}
