import {Component, OnInit} from '@angular/core';
import {PageTitleService} from '../../services/page-title/page-title.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private title: PageTitleService) {
    this.title.title = 'My Portfolio';
  }

  ngOnInit(): void {
  }

}
