import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme/theme.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-theme-customizer',
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.css']
})
export class ThemeCustomizerComponent implements OnInit {
  primary$: Observable<string>;
  accent$: Observable<string>;

  constructor(public themeService: ThemeService) {
    this.primary$ = themeService.primaryColor$.pipe(map((c) => c as string));
    this.accent$ = themeService.accentColor$.pipe(map((c) => c as string));
  }

  ngOnInit(): void {
  }

  setPrimary($event: string): void {
    this.themeService.setPrimaryColor($event);
  }

  setAccent($event: string): void {
    this.themeService.setAccentColor($event);
  }

  setUiTheme($event: MatButtonToggleChange): void {
    this.themeService.setUiTheme($event.value);
  }
}
