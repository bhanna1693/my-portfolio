import {Component} from '@angular/core';
import {PageTitleService} from '../../../services/page-title/page-title.service';
import {ContainerSideNavService} from '../../../container/container-side-nav.service';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent {

  constructor(private pageTitleService: PageTitleService,
              private sidenavService: ContainerSideNavService) {
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  getTitle() {
    return this.pageTitleService.title;
  }
}
