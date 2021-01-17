import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  customSvgs = new Map<string, string>([
    ['hero', '../assets/images/hero.svg']
  ]);

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
  }

  addSvgIconToMatIconRegistry(): void {
    this.customSvgs.forEach((svg) => {
      console.log(svg, this.customSvgs.get(svg));
      const svgName = svg;
      const svgPath = this.customSvgs.get(svg);
      if (svgPath != null) {
        this.matIconRegistry.addSvgIcon(
          svgName,
          this.domSanitizer.bypassSecurityTrustResourceUrl(svgPath)
        );
      }
    });
  }
}

export const ICON_INITIALIZER: Provider[] = [
  IconRegistryService,
  {
    provide: APP_INITIALIZER,
    useFactory: (iconService: IconRegistryService) => iconService.addSvgIconToMatIconRegistry(),
    deps: [IconRegistryService],
    multi: true
  }
];
