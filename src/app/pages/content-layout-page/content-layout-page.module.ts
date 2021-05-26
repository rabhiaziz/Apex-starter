import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentLayoutPageRoutingModule } from './content-layout-page-routing.module';
import { ContentLayoutPageComponent } from './content-layout-page/content-layout-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContentLayoutPageComponent
  ],
  imports: [
    CommonModule,
    ContentLayoutPageRoutingModule,
    FormsModule
  ]
})
export class ContentLayoutPageModule { }
