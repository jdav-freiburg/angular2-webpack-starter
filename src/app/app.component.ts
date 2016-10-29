import { Component, ViewEncapsulation } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private angularFire: AngularFire) {

    }

    login() {
        this.angularFire.auth.login();
    }

    logout() {
        this.angularFire.auth.logout();
    }

}
