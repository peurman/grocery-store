import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';

import { LoggedGuard } from './core/guards/logged.guard';
import { UnLoggedGuard } from './core/guards/unlogged.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // component: AppComponent,
    redirectTo: 'home',
  },
  {
    path: 'home',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    canActivate: [UnLoggedGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'cart',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
