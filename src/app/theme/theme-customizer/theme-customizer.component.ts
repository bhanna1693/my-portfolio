import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme/theme.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

@Component({
  selector: 'app-theme-customizer',
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.css']
})
export class ThemeCustomizerComponent implements OnInit {
  primaryColor: string;
  accentColor: string;

  constructor(private themeService: ThemeService) {
    this.primaryColor = this.themeService.primaryColor;
    this.accentColor = this.themeService.secondaryColor;
  }

  ngOnInit(): void {
  }

  setPrimary($event: string): void {
    this.themeService.primaryColor = $event;
    this.themeService.savePrimaryColor();
  }

  setAccent($event: string): void {
    this.themeService.secondaryColor = $event;
    this.themeService.saveSecondaryColor();
  }

  setUiTheme($event: MatButtonToggleChange) {
    this.themeService.setUiTheme($event.value);
  }
}
