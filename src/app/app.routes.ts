import { Routes } from '@angular/router';
import { List } from './list/list';

export const routes: Routes = [
  {
    path: '',
    component: List,
  },
  {
    path: ':name',
    loadComponent: () => import('./details/details'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
