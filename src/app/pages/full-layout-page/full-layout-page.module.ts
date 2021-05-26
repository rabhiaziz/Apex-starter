import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullLayoutPageRoutingModule } from './full-layout-page-routing.module';
import { FullLayoutPageComponent } from './full-layout-page/full-layout-page.component';


@NgModule({
  declarations: [
    FullLayoutPageComponent
  ],
  imports: [
    CommonModule,
    FullLayoutPageRoutingModule
  ]
})
export class FullLayoutPageModule { }
