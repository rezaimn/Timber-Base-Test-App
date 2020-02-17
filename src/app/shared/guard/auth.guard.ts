import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  token = localStorage.getItem('token');

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token && this.token.length > 0) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
    }
    return false;
  }
}
