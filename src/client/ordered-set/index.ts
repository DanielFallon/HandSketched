/**
 * Created by Daniel Fallon on 12/30/2016.
 */

export interface SetItem {
    hashCode: string
    equals(object: Object);
}

export class OrderedSet<T extends SetItem> extends Array<T>{
    private _uniqueItems:any;
    public has(item:T):boolean{
        return this._uniqueItems[item.hashCode] !== undefined;
    }
    public pop():T{
        let output = super.pop() as T;
        delete this._uniqueItems[output.hashCode];
        return output;
    }
    public push(...items:T[]):number{
        items.map((item)=>{
            if(this.has(item))
                throw Error(`Set already contains: ${item}`);
            super.push(item);
            this._uniqueItems[item.hashCode] = true;
        });
        return super.length;
    }
    public shift():T{
        let output = super.shift() as T;
        delete this._uniqueItems[output.hashCode];
        return output
    }
    public unshift(...items:T[]):number{
        items.map((item)=>{
            if(this.has(item))
                throw Error(`Set already contains: ${item}`);
            super.unshift(item);
            this._uniqueItems[item.hashCode] = true;
        });
        return super.length;
    }
    private static throwNotImplemented(methodName: string):void{
        throw Error(`method "${methodName}" is not implemented`);
    }
}
