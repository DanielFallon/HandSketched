import {MiddlewareBuilder} from './middleware-builder';
import {type} from "os";
import {isUndefined} from "util";
/**
 * Created by Daniel Fallon on 12/27/2016.
 */
let ts = require('typescript');
import express = require('express');

type AliasTuple = [RegExp|string, string];
interface AliasType {
    pattern: RegExp | string;
    alias: string;
}

export type Alias = AliasType|AliasTuple;

interface AliasResolver {
    resolve(url:string):string;
}

abstract class AliasResolverMiddleware implements AliasResolver, MiddlewareBuilder{
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


class AliasChecker implements AliasType{
    public pattern: RegExp|string;
    public alias: string;
    constructor(alias: Alias|AliasTuple){
        if(Array.isArray(alias)){
            // if its an alias tuple
            [this.pattern, this.alias] = alias;
        } else {
            // if its an alias object
            ({pattern:this.pattern, alias:this.alias} = alias);
        }
    };
    test(url: string): boolean {
        // do text matching if its just text
        return this.pattern === url ||
        // otherwise if its regex, do a regex match
            (typeof this.pattern !== 'string' &&
            this.pattern.test(url));
    };
}

class AliasMiddleware extends AliasResolverMiddleware {
    alias: AliasChecker;
    constructor(alias:Alias){
        super();
        this.alias = new AliasChecker(alias);
    }
    resolve(url: string): string {
        //if we have a match, return it, otherwise return input
        return this.alias.test(url)?this.alias.alias:url;
    };
}

class AliasListMiddleware extends AliasResolverMiddleware{
    aliases: AliasChecker[];
    constructor(aliases: Alias[]){
        super();
        this.aliases = aliases.map((alias)=>new AliasChecker(alias));
    };
    resolve(url: string):string {
        for(let index in this.aliases){
            if(this.aliases[index].test(url)){
                return this.aliases[index].alias;
            }
        }
        return url;
    }
}


export function AliasListMiddlewareFactory(aliases: Alias[]): express.Handler{
    return ResolverMiddlewareFactory(new AliasListMiddleware(aliases));

}

export function AliasMiddlewareFactory(alias: Alias):express.Handler{
    return ResolverMiddlewareFactory(new AliasMiddleware(alias));
}

function ResolverMiddlewareFactory(resolver:AliasResolverMiddleware):express.Handler{
    return resolver.middleware;
}
