import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    selector: 'jgd-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private authService: AuthService) {
    }

    private loginGoogle(): void {
        this.authService.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Redirect
        });
    }

    private loginPW(): void {
        console.warn('not yet implemented');
    }

}
