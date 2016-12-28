/**
 * Created by Daniel Fallon on 12/22/2016.
 */

import {Configuration as WebpackConfig} from 'webpack';
import {DevClientConfig, DevServerConfig} from './webpack/dev';

import {ClientConfig} from './webpack/prod';

export = ({development,target}) =>{
    if(development && target === 'server') return DevServerConfig;
    if(development && target === 'client') return DevClientConfig;
    if(target === 'client')return ClientConfig;
}
