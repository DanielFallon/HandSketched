import * as bodyParser from 'body-parser';
import path = require('path');
import fs = require('fs');
import express = require('express');

import {AliasListMiddlewareFactory, Alias} from './alias';
import {DataFolder} from './server-environment';
import {DBDriverMiddlewareFactory} from "../data/db-driver";

export = (app: express.Express) => {
    // setup aliasing middleware
    app.use(["/", "/*"],
        AliasListMiddlewareFactory(
            JSON.parse(fs.readFileSync(
                path.resolve(DataFolder, './aliases.json'),
                'utf8')) as Alias[]));
    // setup static middleware
    app.use('/assets', express.static(path.resolve(__dirname, '../public')));

    // setup mock db
    app.use(bodyParser.json()); // for parsing application/json
    app.use(/\/data\/(?:(update|delete)\/)?(.*$)/, DBDriverMiddlewareFactory(path.resolve(DataFolder, "./db")));
    // ((:action((update|delete))/)?
    // setup pages middleware
    app.get('/page/:pagename', (req, res) => {
        let pagename = req.param("pagename");
        let filePath = path.resolve(
            DataFolder,
            './pages',
            pagename
        );
        let matchingPath = getFileMatch(filePath);
        if(matchingPath){
            res.sendFile(matchingPath);
        }else{
            res.status(404).send({status: 404, detail: "file not found at "+filePath});
        }
    });
}

function getFileMatch(filePath:string){
    let parsedFilePath = path.parse(filePath);
    let pattern = new RegExp(parsedFilePath.base.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&'+"(\.[^\\]*/)?"));
    let folder = fs.readdirSync(parsedFilePath.dir)
    for(let index in folder){
        if(pattern.test(folder[index])){
            return path.resolve(DataFolder,'./pages',folder[index]);
        }
    }
    return undefined;

}
