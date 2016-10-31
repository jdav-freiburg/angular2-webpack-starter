import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthAdminGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(): boolean {
        let isAuthorized: boolean = this.authService.isAuthorized();
        if (!isAuthorized) {
            this.router.navigate(['/']);
        }
        return isAuthorized;
    }

}
