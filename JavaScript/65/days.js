
window.app = (function(module) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];

    module.getDayIndex = function(day) {
        // return days.indexOf(day) +1; // Will not work since it will be case sensetive
        return days.findIndex((e) => day.toLowerCase() === e.toLowerCase()) + 1;
    };

    module.getDay = function (index) {
        return days[index - 1];
    };

    return module;
}(window.app || {}));


console.log(window.app.getDayIndex('tuesday'));
console.log(window.app.getDay(3));