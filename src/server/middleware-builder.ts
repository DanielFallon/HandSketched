
import express = require('express');

export interface MiddlewareBuilder{
    middleware: express.Handler;
}

export abstract class DataResolverMiddleware implements MiddlewareBuilder{
    abstract resolve(url:string):string;
    private _middleware: express.Handler;
    private MiddlewareFunction(req:express.Request, res:express.Response, next: express.NextFunction){
        req.url = this.resolve(req.url);
        next();
    }
    public get middleware(): express.Handler {
        return this._middleware = this._middleware || this.MiddlewareFunction.bind(this);
    }
}
