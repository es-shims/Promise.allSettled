import implementation = require('./implementation');
import getPolyfill = require('./polyfill');
import shim = require('./shim');

type exportedImplementation = typeof implementation & {
    getPolyfill: typeof getPolyfill,
    implementation: typeof implementation,
    shim: typeof shim,
}

export = exportedImplementation
