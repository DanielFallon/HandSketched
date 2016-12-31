import {SetItem, Set} from "./set";
export interface MutableSetItem extends SetItem {
    merge(object:MutableSetItem):void;
}

export class MutableSet<T extends MutableSetItem> extends Set<T>{
    public update(item:T){
        let sameHash = this._uniqueItems[item.hashCode] = this._uniqueItems[item.hashCode] || [];
        sameHash
            .filter((testItem)=>testItem.equals(item))
            .forEach((testItem)=>testItem.merge(item));
    }
}
