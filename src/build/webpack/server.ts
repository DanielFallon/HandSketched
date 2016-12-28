/**
 * Created by Daniel Fallon on 12/22/2016.
 */

import {Configuration as WebpackConfig} from 'webpack';
import {SourceRoot} from '../environment';

export let ServerConfig: WebpackConfig  = {
    target: 'node',
    context: SourceRoot,

};
