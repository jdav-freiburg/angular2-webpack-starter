import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'jgd-items',
    styleUrls: ['./items.component.scss'],
    templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

    private items: FirebaseListObservable<any[]>;

    constructor(private angularFire: AngularFire) {
    }

    ngOnInit(): void {
        this.items = this.angularFire.database.list('/items');
    }

}
