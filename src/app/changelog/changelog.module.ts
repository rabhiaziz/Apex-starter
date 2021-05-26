import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangelogRoutingModule } from './changelog-routing.module';
import { ChangelogComponent } from './changelog/changelog.component';
import { MatchHeightModule } from "../shared/directives/match-height.directive";


@NgModule({
  declarations: [
    ChangelogComponent
  ],
  imports: [
    CommonModule,
    ChangelogRoutingModule,
    MatchHeightModule
  ]
})
export class ChangelogModule { }
