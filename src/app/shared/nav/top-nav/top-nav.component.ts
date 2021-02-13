import {Component, OnInit} from '@angular/core';
import {expandOnRender} from '../../../animations/expand.animation';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [expandOnRender]
})
export class TopNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
