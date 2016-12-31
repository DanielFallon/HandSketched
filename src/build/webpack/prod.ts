/**
 * Created by Daniel Fallon on 12/22/2016.
 */

let path = require('path');

import {SourceRoot, DistRoot} from '../environment';
import {Configuration as WebpackConfig} from 'webpack';

export let ClientConfig: WebpackConfig = {
    target: 'web',
    context: SourceRoot,
    entry: {
        main: './client/index'
    },
    output:{
        filename: '[name].js',
        path: path.resolve(DistRoot, 'public'),
        publicPath:  "/assets/"
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }, {
                    loader: 'ts-loader',
                    options: {
                        configFileName: "tsconfig.client.json"
                    }
                }]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ]
            }
        ]
    }

};
