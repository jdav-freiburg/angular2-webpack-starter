import { Component, Input } from '@angular/core';

@Component({
    selector: 'jgd-info-message',
    templateUrl: './info-message.component.html'
})
export class InfoMessageComponent {

    @Input() message: string;

}
