/**
 * Created by Daniel Fallon on 12/22/2016.
 */

import * as path from 'path';

export let ProjectRoot  = path.join(__dirname,'..','..');
export let SourceRoot = path.join(ProjectRoot, 'src');
export let BuildRoot = path.join(ProjectRoot, 'build');
export let DistRoot = path.join(ProjectRoot, 'dist');
