import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface PortfolioItem {
  summary: string;
  name: string;
  id: string;
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
  {name: 'Table', id: 'table', summary: 'An in-depth example of my table implementation.'},
  {name: 'Forms', id: 'forms', summary: 'Form building and validation example.'}
];
