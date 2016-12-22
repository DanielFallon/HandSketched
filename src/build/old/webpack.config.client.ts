import webpack = require("webpack");
import * as path from 'path';
import { distDir, srcDir, projectRoot } from "./webpack.config.common";
import {TsConfigPathsPlugin } from "awesome-typescript-loader";

let clientTSConfig = path.join(srcDir,"client","tsconfig.json");
let clientTsConfigOptions = require(clientTSConfig);
console.log(clientTsConfigOptions);
declare module "webpack" {
    interface Webpack {
        HashedModuleIdsPlugin: any;
    }
}
export = {
    context: srcDir,
    target: "web",
    entry: {
        client: "./client/index",
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.join(distDir, 'client'),
        filename: "[name].[chunkhash].bundle.js"
    },
    resolve: {
        plugins: [
            new TsConfigPathsPlugin({configFileName: clientTSConfig})
        ],
        extensions: [".ts",".tsx",".js",".jsx"]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["common"],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true,
                        useCache: true,
                        babelOptions: {
                            presets: ["es2015","react"],
                            sourceMaps: true
                        },
                        configFileName: clientTSConfig}
                }],
            }
        ],
    },
    devtool: "cheap-eval-source-map"
};