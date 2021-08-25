window.app = window.app || {};

window.app.views = (function(theModule){
    'use strict';

    theModule.viewFuctions = () => console.log('a view function');

    return theModule;

}(window.app.views || {}));