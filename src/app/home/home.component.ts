import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    private items: FirebaseListObservable<any[]>;

    constructor(private angularFire: AngularFire) {
    }

    ngOnInit(): void {
        this.items = this.angularFire.database.list('/items');
    }

}
