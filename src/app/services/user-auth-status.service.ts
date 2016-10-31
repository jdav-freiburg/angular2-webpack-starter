import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { UserAuthStatus } from '../model/user';

@Injectable()
export class UserAuthStatusService {

    private userAuthStatus: UserAuthStatus = <UserAuthStatus>{
        isAuthorized: false,
        isRegistered: false
    };

    constructor(private authService: AuthService, private userService: UserService) {
    }

    public getUserAuthStatus(): Observable<UserAuthStatus> {
        return Observable.merge(//
            this.authService.isAuthorized().map((isAuthorized: boolean) => {
                this.userAuthStatus.isAuthorized = isAuthorized;
                return this.userAuthStatus;
            }),
            this.userService.isRegistered().map((isRegistered: boolean) => {
                this.userAuthStatus.isRegistered = isRegistered;
                return this.userAuthStatus;
            }));
    }
}
