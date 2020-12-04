import { Component } from '@angular/core';
import {NavStoreService} from './nav/nav-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(public navStore: NavStoreService) {
  }
}
