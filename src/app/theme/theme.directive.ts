import {Directive, ElementRef, Inject, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Theme} from './theme.model';
import {Subject} from 'rxjs';
import {ThemeService} from './theme.service';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {


  private _destroy$ = new Subject();

  constructor(
    private _elementRef: ElementRef,
    private _themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    const active = this._themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }

    this._themeService.themeChange
      .pipe(takeUntil(this._destroy$))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateTheme(theme: Theme): void {
    // project properties onto the element
    Object.entries(theme.properties).forEach(([property, value]) => {
      this.document.documentElement.style.setProperty(property, value);
    });

    // alias element with theme name
    this.document.documentElement.classList.add(`${theme.name}-theme`);

    // remove old theme alias
    for (const name of this._themeService.theme) {
      this.document.documentElement.classList.remove(`${name}-theme`);
    }
  }

}
