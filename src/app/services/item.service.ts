import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ItemService {

    constructor(private af: AngularFire) {
    }

    public get items(): Observable<any[]> {
        return this.af.database.list('/items');
    }

}
