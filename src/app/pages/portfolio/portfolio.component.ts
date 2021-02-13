import {Component, OnInit} from '@angular/core';
import {PageTitleService} from '../../services/page-title/page-title.service';
import {PortfolioNavComponent} from './portfolio-nav/portfolio-nav.component';
import {ContainerSideNavService} from '../../container/container-side-nav.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private title: PageTitleService,
              private panelService: ContainerSideNavService) {
    this.title.title = 'My Portfolio';
  }

  ngOnInit(): void {
    this.panelService.setPanelContent(PortfolioNavComponent);
  }

}
