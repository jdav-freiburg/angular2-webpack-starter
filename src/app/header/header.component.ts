import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'jgd-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private authService: AuthService) {
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

}
