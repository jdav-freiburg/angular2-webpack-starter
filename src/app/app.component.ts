import { Component, ViewEncapsulation } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'jgd-app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private af: AngularFire) {

    }

    login() {
        this.af.auth.login();
    }

    logout() {
        this.af.auth.logout();
    }

}
