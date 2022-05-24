import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    isLogged(): boolean {
        if (localStorage.getItem('@pmp:user:token')) {
            return true;
        }
        return false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLogged()) {
            return true;
        }
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}
