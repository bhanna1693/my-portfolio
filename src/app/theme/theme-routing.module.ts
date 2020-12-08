import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThemeCustomizerComponent} from './theme-customizer/theme-customizer.component';

const routes: Routes = [
  {path: '', component: ThemeCustomizerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {
}
