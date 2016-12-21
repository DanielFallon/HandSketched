import webpack = require("webpack");
import { outDir } from "./webpack.config.common";

export = {
    entry: {
        client: "../client/index",
        common: "../common/index"
    },
    output: {
        path: outDir,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};