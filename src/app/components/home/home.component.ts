import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'jgd-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private userService: UserService) {
    }

}
