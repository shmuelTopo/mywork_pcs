window.app = window.app || {};

window.app.views = (function (theModule) {
    'use strict';

    theModule.viewFuctions2 = () => console.log('a views function 2');

    return theModule;

}(window.app.views || {}));