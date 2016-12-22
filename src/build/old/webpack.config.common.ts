/**
 * Created by Daniel Fallon on 12/20/2016.
 */

import * as path from "path";
export let buildScriptDir = __dirname;
export let buildDir = path.join(buildScriptDir, '..');
export let projectRoot = path.join(buildDir, '..');
export let srcDir = path.join(projectRoot, 'src');
export let binDir = path.join(buildDir, 'bin');
export let distDir =