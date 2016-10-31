import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserAuthStatusService } from '../../services/user-auth-status.service';
import { UserAuthStatus } from '../../model/user';

@Component({
    selector: 'jgd-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private userAuthStatus: UserAuthStatus;

    constructor(private authService: AuthService, private userAuthStatusService: UserAuthStatusService) {
    }

    ngOnInit(): void {
        this.userAuthStatusService.getUserAuthStatus().subscribe((userAuthStatus: UserAuthStatus) => {
            this.userAuthStatus = userAuthStatus;
        });
    }

    private logout(): void {
        this.authService.logout();

    }

}
