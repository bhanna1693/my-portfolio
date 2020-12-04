import {Component, OnInit} from '@angular/core';
import {NavStoreService} from '../nav-store.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private navStore: NavStoreService) {
  }

  ngOnInit(): void {
  }

  openSidenav(): void {
    this.navStore.setIsExpanded(true);
  }
}
