/** Startup script for the server in development */

import {DistRoot} from '../build/environment'
import WebpackDevMiddleware = require('webpack-dev-middleware');
import WebpackHotMiddleware = require('webpack-hot-middleware');
import webpack = require('webpack');
import path = require('path');
import express = require('express');
import Promise = require('promise');

import webpackConfig = require('../build/webpack.config');
let devClientConfig = webpackConfig({development: true, target: 'client'});
let devClientCompiler = webpack(devClientConfig);
const app = express();
export = app;
console.log(DistRoot+'public');

app.use('/assets', express.static(path.resolve(__dirname,'../public')));

app.get('/', function (req, res) {
    res.send("hello world!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000.")
});
