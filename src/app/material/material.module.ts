import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const modules: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {
}
