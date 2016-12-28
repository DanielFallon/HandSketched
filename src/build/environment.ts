/**
 * Created by Daniel Fallon on 12/22/2016.
 */

import * as path from 'path';

export let ProjectRoot  = path.join(__dirname,'..');
export let SourceRoot = path.resolve(ProjectRoot, 'src');
export let BuildRoot = path.resolve(ProjectRoot, 'build');
export let DistRoot = path.resolve(ProjectRoot, 'dist');
export let DataFolder = path.resolve(ProjectRoot, 'data');

