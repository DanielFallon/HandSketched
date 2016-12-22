/**
 * Created by Daniel Fallon on 12/21/2016.
 */
import {TsConfigPathsPlugin } from "awesome-typescript-loader";
import * as ts from 'typescript';
import {Configuration as WebpackConfig} from "webpack";
import * as webpack from "webpack";
import {ProjectPaths} from "./config";
import * as path from "path";
import {LoaderConfig} from "awesome-typescript-loader/dist/interfaces";
import compiler = webpack.compiler;
import {MapLike} from 'typescript';

let DefaultTSCompilerConfig: ts.CompilerOptions = {
    noImplicitAny: true,
    baseUrl: ProjectPaths.ProjectRoot,
    rootDir: ProjectPaths.ProjectRoot,
    jsx: ts.JsxEmit.Preserve,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2015,
};

export = {
    "root": ProjectPaths.ProjectRoot
}