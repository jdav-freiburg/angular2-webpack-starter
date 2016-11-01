import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
    selector: 'jgd-app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss', '../scss/material-icons.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private loading: boolean = true;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.loading = false;
            }
            if (event instanceof NavigationStart) {
                this.loading = true;
            }
        });
    }

}
