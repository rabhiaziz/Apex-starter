import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangelogModule)
  },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-layout-page.module').then(m => m.FullLayoutPageModule)
  }
];
