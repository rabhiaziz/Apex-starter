import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { CONTENT_ROUTES } from './layouts/routes/content-layout.routes';
import { Full_ROUTES } from './layouts/routes/full-layout.routes';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'full-layout',
    pathMatch: 'full',
  },
  { path: '', component: FullComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
