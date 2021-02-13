import { Component } from '@angular/core';
import {NavStoreService} from './shared/nav/nav-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(public navStore: NavStoreService) {
  }
}
