import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import 'bootstrap';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources');

    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    return aurelia.start().then(() => aurelia.setRoot());
}
