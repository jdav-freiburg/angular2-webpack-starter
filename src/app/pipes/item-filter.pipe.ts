import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../model/item';

@Pipe({
    name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

    transform(items: Item[], type: string, description: string): any {
        if ((type === undefined || type.trim().length === 0) &&
            (description === undefined || description.trim().length === 0)) {
            return items;
        }
        return items.filter((item: Item) => {
            let filterType = type !== undefined && type.trim().length > 0;
            let filterDescription = description === undefined || description.trim().length > 0;

            return (!filterType || (filterType && item.type.indexOf(type) !== -1)) &&
                (!filterDescription || (filterDescription && item.description.indexOf(description) !== -1));
        });
    }

}
