import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedGuard } from './core/guards/logged.guard';
import { UnLoggedGuard } from './core/guards/unlogged.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  {
    path: 'categories',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    canActivate: [UnLoggedGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
