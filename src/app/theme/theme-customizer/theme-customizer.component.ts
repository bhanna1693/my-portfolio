import {Component, OnInit} from '@angular/core';
import {ThemeConfig, ThemeService} from '../../services/theme/theme.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-theme-customizer',
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.css']
})
export class ThemeCustomizerComponent implements OnInit {

  constructor(private themeService: ThemeService) {
  }

  get themeConfig$(): Observable<ThemeConfig> {
    return this.themeService.themeConfig$;
  }

  ngOnInit(): void {
  }

  setPrimary($event: string): void {
    this.themeService.setPrimaryColor($event);
  }

  setAccent($event: string): void {
    console.log($event);
    this.themeService.setAccentColor($event);
  }

  setWarn($event: string): void {
    this.themeService.setWarnColor($event);
  }

  setUiTheme($event: MatButtonToggleChange): void {
    this.themeService.setUiTheme($event.value);
  }
}
