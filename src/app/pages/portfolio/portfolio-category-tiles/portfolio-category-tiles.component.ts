import { Component, OnInit } from '@angular/core';
import {portfolioItems} from '../portfolio-nav/portfolio-nav.component';

@Component({
  selector: 'app-portfolio-category-tiles',
  templateUrl: './portfolio-category-tiles.component.html',
  styleUrls: ['./portfolio-category-tiles.component.scss']
})
export class PortfolioCategoryTilesComponent implements OnInit {
  portfolioItems = portfolioItems;

  constructor() { }

  ngOnInit(): void {
  }

}
