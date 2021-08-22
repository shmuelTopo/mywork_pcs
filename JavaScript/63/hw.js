'use strict';
const du = (function(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];

    // function getDayIndex(day) {
    //     for(let i = 0; i < days.length; i++){
    //         if(days[i] === day) {
    //             return i + 1;
    //         }
    //     }
    // }

    function getDayIndex(day) {
        // return days.indexOf(day) +1; // Will not work since it will be case sensetive
        return days.findIndex((e) => day.toLowerCase() === e.toLowerCase()) +1;
    }

    function getDay(index) {
        return  days[index-1];
    }

    return {
        getDayIndex: getDayIndex,
        getDay: getDay
    };
    
}());


console.log(du.getDayIndex('tuesday'));
console.log(du.getDay(4));
