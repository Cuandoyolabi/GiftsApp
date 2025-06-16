import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),

    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page.component/trending-page.component.component'),
      },
    {
      path: 'search',
      loadComponent: () => import('./gifs/pages/search-app.component/search-app.component.component'),
    },
    {
      path: '**',
      redirectTo: 'trending'
    }
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },

];
