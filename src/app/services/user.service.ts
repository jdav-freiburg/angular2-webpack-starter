import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFire } from 'angularfire2';
import { RegisteredUser, AuthUser } from '../model/user';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

    private registeredUser: RegisteredUser;

    constructor(private af: AngularFire, private authService: AuthService) {
    }

    public reset(): void {
        this.registerUser = undefined;
    }

    public isRegistered(): Observable<boolean> {
        if (this.registeredUser === undefined) {
            return this.getRegisteredUser().map((user: RegisteredUser) => {
                return user !== undefined;
            });
        }

        return Observable.from([this.registeredUser !== undefined]);
    }

    public getRegisteredUser(): Observable<RegisteredUser> {
        if (this.registeredUser === undefined) {
            console.trace('#getRegisteredUser();');

            let subject: Subject<RegisteredUser> = new Subject<RegisteredUser>();

            this.authService.getAuthUser().subscribe((authUser: AuthUser) => {
                console.trace('getRegisteredUser(); authUser=', authUser);
                if (authUser === null) {
                    console.debug('getRegisteredUser(); will emit nothing');
                    subject.complete();
                } else {
                    this.getUser(authUser.uid).subscribe((user: RegisteredUser) => {
                        console.debug('getRegisteredUser(); will emit ', user);
                        subject.next(user);
                        subject.complete();
                    });
                }
            });
            return subject;
        }

        return Observable.from([this.registeredUser]);
    }

    public registerUser(user: RegisteredUser): firebase.Promise<void> {
        return this.af.database.object(`/users/${user.id}`).set(user);
    }

    private getUser(id: string): Observable<RegisteredUser> {
        return this.af.database.object(`/users/${id}`).map((user: any) => {
            let exists: boolean = user.$exists();
            console.trace(`#getUser('${id}'); exists=${exists}`);
            if (exists) {
                this.registeredUser = <RegisteredUser>{
                    id: id,
                    name: user.$value.name,
                    email: user.$value.email,
                    roles: user.$value.roles
                };
            }
            return this.registeredUser;
        });
    }

}
