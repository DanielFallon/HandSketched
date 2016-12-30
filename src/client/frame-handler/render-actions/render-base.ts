import {RenderType, RenderMethods} from "./render-types";
/**
 * Created by Daniel Fallon on 12/30/2016.
 */

export interface RenderAction {
    render(canvas: any);
}

export interface RenderData {
    prototype: any;
    type:RenderType;
}

export function ConvertToRenderAction(data:RenderData){
    data.prototype = RenderMethods[data.type];
    return data;
}
