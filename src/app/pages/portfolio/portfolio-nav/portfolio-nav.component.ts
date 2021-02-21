import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface PortfolioItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-portfolio-nav',
  templateUrl: './portfolio-nav.component.html',
  styleUrls: ['./portfolio-nav.component.scss']
})
export class PortfolioNavComponent implements OnInit {
  @Output() navItemSelected = new EventEmitter<PortfolioItem>();
  links: PortfolioItem[] = portfolioItems;

  constructor() {
  }

  ngOnInit(): void {
  }
}

export const portfolioItems: PortfolioItem[] = [
  {name: 'Table', route: '/portfolio/table'},
  {name: 'Forms', route: '/portfolio/forms'}
];
