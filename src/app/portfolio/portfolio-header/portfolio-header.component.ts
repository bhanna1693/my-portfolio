import {Component, EventEmitter, Output} from '@angular/core';
import {PageTitleService} from '../../shared/page-title/page-title.service';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private pageTitleService: PageTitleService) {
  }

  getTitle() {
    return this.pageTitleService.title;
  }
}
