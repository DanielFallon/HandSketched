/**
 * Created by Daniel Fallon on 12/22/2016.
 */

import {Configuration as WebpackConfig} from 'webpack';
import {ConfigurationOptions} from "./config";

class BuildOptions implements ConfigurationOptions {
    phase: BuildPhase;
    type: BuildType;
    constructor(options){
        let {type, phase} = options
        this.type = type;
        this.phase = phase;
    }
}

function RetrieveConfiguration(options:ConfigurationOptions):WebpackConfig{
    return {};
}

export = options => RetrieveConfiguration(new BuildOptions(options))