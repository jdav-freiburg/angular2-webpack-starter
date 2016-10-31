import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'jgd-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private authService: AuthService) {
    }

    private login(): void {
        this.authService.login();
    }

}
