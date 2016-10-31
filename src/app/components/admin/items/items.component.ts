import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemService } from '../../../services/item.service';

@Component({
    selector: 'jgd-items',
    styleUrls: ['./items.component.scss'],
    templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

    private items: Observable<any[]>;

    constructor(private itemService: ItemService) {
    }

    ngOnInit(): void {
        this.items = this.itemService.items;
    }

}
