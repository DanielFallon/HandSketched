/**
 * Created by Daniel Fallon on 12/30/2016.
 */


export enum RenderType{
    line
}

export let RenderMethods = {
    register(type:RenderType, renderMethod: (canvas:any)=>void){
        this[type] = {
            type: type,
            render: renderMethod
        }
    }
};
