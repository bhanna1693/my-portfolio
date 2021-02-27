import {APP_INITIALIZER, Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {OnAppInit} from '../../models/on-app-init';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService implements OnAppInit {
  customSvgs = new Map<string, string>([
    ['hero', '../assets/icons/hero.svg'],
    ['coding_laptop', '../assets/icons/coding-laptop.svg']
  ]);

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
  }

  onAppInit(): void {
    this.addSvgIconToMatIconRegistry();
  }

  private addSvgIconToMatIconRegistry(): void {
    this.customSvgs.forEach((iconPath, iconName) => {
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
      );
    });
  }
}

export const ICON_INITIALIZER = [
  IconRegistryService,
  {
    provide: APP_INITIALIZER,
    useFactory: (iconService: IconRegistryService) => () => iconService.onAppInit(),
    deps: [IconRegistryService],
    multi: true
  }
];
