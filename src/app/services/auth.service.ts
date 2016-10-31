import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    private isLoggedIn: boolean = false;

    constructor(private af: AngularFire, private router: Router) {
    }

    public isAuthorized(): boolean {
        this.af.auth.subscribe((authState: FirebaseAuthState) => {
            this.isLoggedIn = authState && authState.auth !== undefined;
        });

        return this.isLoggedIn;
    }

    public login() {
        this.af.auth.login();
    }

    public logout() {
        this.af.auth.logout();
        this.router.navigate(['/']);
    }

}
