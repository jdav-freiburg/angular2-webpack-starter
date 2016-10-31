import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'jgd-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private af: AngularFire) {
    }

    ngOnInit() {
    }

}
