window.app = window.app || {};

window.app.counter2 = (function () {
    'use strict';
    let numberOfCounters = 0;

    return {
        createCoutner: function () {
            let i = 0;
            numberOfCounters++;
            return {
                increment: () => i++,
                getCount: () => i,
                getCountOfCounters: () => numberOfCounters
            };
        },
        getNumOfCounters: () => numberOfCounters
    };

}());