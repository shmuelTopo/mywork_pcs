window.app = window.app || {};
window.app.utils = (function (module, theAlert) {
    'use strict';
    module.caseInsensetiveCompare = (a, b) => a.toLowerCase() === b.toLowerCase();
    module.nodify = (msg) => theAlert(msg);
    return module;
}(window.app.utils || {}, (m) => console.error(m)));

