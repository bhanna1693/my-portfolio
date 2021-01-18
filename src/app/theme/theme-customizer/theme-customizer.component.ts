import {Component, OnInit} from '@angular/core';
import {ThemeConfig, ThemeService} from '../../services/theme/theme.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-theme-customizer',
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.scss']
})
export class ThemeCustomizerComponent implements OnInit {

  constructor(private themeService: ThemeService) {
  }

  get themeConfig$(): Observable<ThemeConfig> {
    return this.themeService.themeConfig$;
  }

  ngOnInit(): void {
  }

  setPrimary($event: Event): void {
    const input = $event.target as HTMLInputElement;
    this.themeService.setPrimaryColor(input.value);
  }

  setAccent($event: Event): void {
    const input = $event.target as HTMLInputElement;
    this.themeService.setAccentColor(input.value);
  }

  setWarn($event: Event): void {
    const input = $event.target as HTMLInputElement;
    this.themeService.setWarnColor(input.value);
  }

  setUiTheme($event: MatButtonToggleChange): void {
    this.themeService.setUiTheme($event.value);
  }

}
