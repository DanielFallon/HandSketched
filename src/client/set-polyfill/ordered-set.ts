import {SetItem, Set} from "./set";

export class OrderedSet<T extends SetItem> extends Array<T>{
    protected _internalSet: any;
    protected get internalSet(): Set<T> {
        return this._internalSet = this._internalSet || new Set<T>();
    }

    /**
     * returns true if the set contains the item specified
     * @param item
     * @returns {boolean} true, if an equal item is found in the set
     */
    public has(item:T):boolean{
        return this.internalSet.has(item);
    }

    /**
     * returns the last value in the array and deletes it from the set
     * @returns the last value in the array
     */
    public pop():T{
        let output = super.pop() as T;
        this.internalSet.remove(output);
        return output;
    }

    /**
     * adds new items to the end of the set
     * @param items - the items to be inserted
     * @returns {number} the number of items in the set after items have been added
     */
    public push(...items:T[]):number{
        items.map((item)=>{
            if(this.has(item))
                super.push(item);
            this.internalSet.add(item);
        });
        return super.length;
    }

    /**
     * removes an item from the front of the set
     * @returns the first value from the set
     */
    public shift():T{
        let output = super.shift() as T;
        this.internalSet.remove(output);
        return output
    }

    /**
     * adds items to the beginning of the set
     * throws an error if the set already contains any of the items
     * @param items - the items to be added
     * @returns {number} the number of items in the set after items have been added
     */
    public unshift(...items:T[]):number {
        items.map((item) => {
            if (this.has(item))
                throw Error(`Set already contains: ${item}`);
            super.unshift(item);
            this.internalSet.add(item);
        });
        return super.length;
    }
}
