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
import {ICON_INITIALIZER} from './services/icon-registry/icon-registry.service';
import {HttpClientModule} from '@angular/common/http';
import {THEME_INITIALIZER} from './services/theme/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavModule,
    MaterialModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    ...ICON_INITIALIZER,
    ...THEME_INITIALIZER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
