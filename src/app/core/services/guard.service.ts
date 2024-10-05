import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class GuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    }

    this.router.navigate(['']);
    return false;
  }
}
