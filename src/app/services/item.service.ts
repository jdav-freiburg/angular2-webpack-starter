import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { Item } from '../model/item';

@Injectable()
export class ItemService {

    constructor(private af: AngularFire) {
    }

    public get items(): Observable<Item[]> {
        return this.af.database.list('/items');
    }

    public get types(): Observable<string[]> {
        return this.af.database.list('/types');
    }

}
