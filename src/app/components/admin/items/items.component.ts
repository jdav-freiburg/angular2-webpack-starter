import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../model/item';

@Component({
    selector: 'jgd-items',
    styleUrls: ['./items.component.scss'],
    templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

    private items: Item[];
    private types: string[];

    private typeFilter: string;
    private descriptionFilter: string;

    constructor(private itemService: ItemService) {
    }

    ngOnInit(): void {
        this.itemService.items.subscribe((items: Item[]) => {
            this.items = items;
        });
        this.itemService.types.subscribe((types: string[]) => {
            this.types = types;
        });
    }

}
