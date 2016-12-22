import EventEmitter = NodeJS.EventEmitter;
import {isNullOrUndefined} from "util";
import {isNull} from "util";
let Promise = require('promilse');
/**
 * Created by Daniel Fallon on 12/22/2016.
 */

let SecureObject = require('../../common/secure-object');






class EventThenable implements PromiseLike<any> {
    private children: PromiseLike<any>;
    private parent: PromiseLike<any>;
    private createResolve: Function;
    constructor(resolveParent: any, parent: PromiseLike<any> ){
        let children: number = 0;
        let triggered: boolean = false;
        this.createResolve = () => {
            children++;
            let resolved = false;
            return function() {
                children--
                if(resolved || !triggered) return;
                if (children-- === 0) {
                    resolveParent();
                }
                return arguments;
            }
        };
        function trigger() {
            triggered = true;
            return arguments;
        }
        this.parent = parent.then(trigger);


    }
    then(onfulfilled?, onrejected?): PromiseLike<any> {
        return this.parent.then(onfulfilled, onrejected).then(this.createResolve());
    };



}

class EventTrigger<In,Out>{
    constructor(){
        function complete

    };
    public register(callback: Function): PromiseLike<Out & any> {
        new Promise
    }
}

abstract class BuildEvent<TriggerData,PreData,PostData,EmitData> {
    constructor(){
    }
    public trigger(data: PreData){

    }
    private triggerEvent: PromiseLike<PreData>
    public PreEvent: PromiseLike<PreData>;
    public PostEvent: PromiseLike;
    public process(data: any){

    }
    private emit(data: any){

    }
}