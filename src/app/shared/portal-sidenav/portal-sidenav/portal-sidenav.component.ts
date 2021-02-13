import {Component, OnInit} from '@angular/core';
import {PortalSidenavService} from '../portal-sidenav.service';

@Component({
  selector: 'app-portal-sidenav',
  templateUrl: './portal-sidenav.component.html',
  styleUrls: ['./portal-sidenav.component.scss']
})
export class PortalSidenavComponent implements OnInit {

  constructor(private panelService: PortalSidenavService) {
  }

  get panelPortal$() {
    return this.panelService.panelPortal$;
  }

  ngOnInit(): void {
  }

}
