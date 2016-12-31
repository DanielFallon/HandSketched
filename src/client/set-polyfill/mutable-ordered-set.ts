import {MutableSetItem, MutableSet} from "./mutable-set";
import {OrderedSet} from "./ordered-set";

export class MutableOrderedSet<T extends MutableSetItem> extends OrderedSet<T> {
    protected get internalSet(): MutableSet<T> {
        return this._internalSet = this._internalSet || new MutableSet<T>();
    }

    /**
     * add items to the end of the set, merge any overlapping items
     * @param items - items to be added
     * @returns {number} the new number of items in the list after adding the items to the list
     */
    public push(...items): number {
        items.map((item)=>{
            let oldLength = this.length;
            if(oldLength == super.push(item))
                this.internalSet.update(item);
        });
        return this.length;
    }

    /**
     * add items to the beginning of the set, merge any overlapping items
     * @param items - items to be added
     * @returns {number} the new number of items in the list
     */
    public unshift(...items): number {
        items.map((item)=>{
            let oldLength = this.length;
            if(oldLength == super.unshift(item))
                this.internalSet.update(item);
        });
        return this.length;
    }

}
