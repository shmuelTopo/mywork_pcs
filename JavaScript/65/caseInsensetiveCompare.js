window.app = (function (module) {
    'use strict';
    module.caseInsensetiveCompare = (a, b) => a.toLowerCase() === b.toLowerCase()
    return module;
}(window.app || {}));


console.log("'JOE', 'joe' -->", window.app.caseInsensetiveCompare('JOe', 'joe'));