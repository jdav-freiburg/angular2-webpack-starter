import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'jgd-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    }

    private routeHome(): void {
        this.router.navigate(['/']);
    }

    private logout(): void {
        this.authService.logout();

    }

}
