import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';

@Injectable()
export class AdminUserGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(): Observable<boolean> {
        let isRegistered: Observable<boolean> = this.userService.isRegistered().first();
        this.userService.isRegistered().first().subscribe((isReg: boolean) => {
            if (!isReg) {
                this.router.navigate(['/register']);
            }
        });
        return isRegistered;
    }

}
