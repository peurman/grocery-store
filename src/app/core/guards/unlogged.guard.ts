import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UnLoggedGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('user.token');
    if (!token) {
      // TODO Get User
      return true;
    }

    this._router.navigateByUrl('/');
    return false;
  }
}
