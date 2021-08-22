window.app = window.app || {};

window.app.models = (function(theModule) {
    'use strict';

    theModule.modelFunction = () => console.log('a model function');

    return theModule;
}(window.app.models || {}));