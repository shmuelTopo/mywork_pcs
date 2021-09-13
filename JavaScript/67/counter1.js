window.app = window.app || {};

window.app.counter1 = (function(m) {
    'use strict';
    
    let i = 0;

    // return {
    //     increment: () => i++, 
    //     getCount: () => i
    // };

    m.increment = () => i++;
    m.getCount = () => i;
    return m;

}(window.app.counter1 || {}));