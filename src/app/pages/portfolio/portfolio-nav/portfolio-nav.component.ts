import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-portfolio-nav',
  templateUrl: './portfolio-nav.component.html',
  styleUrls: ['./portfolio-nav.component.scss']
})
export class PortfolioNavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  links = [
    {label: 'Forms', value: 'forms'},
    {label: 'Table', value: 'table'},
    {label: 'Table', value: '/table'},
    {label: 'Table', value: '/table'},
    {label: 'Table', value: '/table'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
