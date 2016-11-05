import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'jgd-items-saved-message',
    template: `<jgd-info-message [message]="'Änderungen gespeichert'"></jgd-info-message>`
})
export class ItemsSavedMessageComponent {
    constructor(dialogRef: MdDialogRef<ItemsSavedMessageComponent>) {
    }
}
