import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavModule} from './nav/nav.module';
import {ContactComponent} from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {ThemeModule} from './theme/theme.module';
import {lightTheme} from './theme/light-theme';
import {darkTheme} from './theme/dark-theme';
import {ACTIVE_THEME, THEMES} from './theme/theme.model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ThemeModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {provide: THEMES, useValue: [lightTheme, darkTheme]},
    {provide: ACTIVE_THEME, useValue: 'light'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
