import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutPageComponent } from './full-layout-page/full-layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutPageComponent,
    data: {
      title: 'Full Layout Page'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutPageRoutingModule { }
