import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ContactComponent}]),
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ContactModule {
}
