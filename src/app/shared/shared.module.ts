import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDirective } from './directives/sidebar.directive';
import { MatchHeightDirective } from './directives/match-height.directive';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import { SidebarLinkDirective } from './directives/sidebarlink.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebaranchortoggle.directive';
import { SidebarListDirective } from './directives/sidebarlist.directive';
import { SidebarToggleDirective } from './directives/sidebartoggle.directive';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective
  ],
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    PerfectScrollbarModule
  ],
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    NgbModule,
    TranslateModule
  ]
})
export class SharedModule { }
