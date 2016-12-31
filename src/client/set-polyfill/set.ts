/**
 * Created by Daniel Fallon on 12/30/2016.
 */

export interface SetItem {
    hashCode: string
    equals(object: Object):boolean;
}

export class Set<T extends SetItem> {
    protected _uniqueItems:any;
    /**
     * returns true if the set contains the item specified
     * @param item
     * @returns {boolean} true, if an equal item is found in the set
     */
    public has(item:T): boolean {
        let sameHash: T[] = this._uniqueItems[item.hashCode];
        return sameHash && sameHash.some((testItem) => testItem.equals(item))
    }

    /**
     * add an item to the set if it doesn't exist
     * @param item - the item to be added
     */
    public add(item:T){
        let sameHash = this._uniqueItems[item.hashCode] = this._uniqueItems[item.hashCode] || [];
        if(!sameHash.some((testItem)=>testItem.equals(item))){
            sameHash.push(item);
        }
    }

    /**
     * remove an item from the set if it exists
     * @param item - the item to be removed
     */
    public remove(item:T){
        let sameHash:T[] = this._uniqueItems[item.hashCode];
        if(!sameHash)
            return;
        let newItems = sameHash.filter((testItem)=>testItem.equals(item));
        if(newItems.length > 0){
            this._uniqueItems[item.hashCode] = newItems;
        }else{
            delete this._uniqueItems[item.hashCode];
        }
    }
}
