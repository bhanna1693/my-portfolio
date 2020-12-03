import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NavModule} from './nav/nav.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
