'use strict';
/*
const months = ['January', "Febuary", "March", "April", "May"];
function getMonth(index){
    return months[index-1];
}

function getIndex(monthName) {
    return months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
}

console.log('getMonth(2)', getMonth(2));
console.log('getIndex("MARCH")', getIndex("MARCH"));

*/

/*
const monthUtils = {
    months : ['January', "Febuary", "March", "April", "May"],
    getMonth: function (index){
        return this.months[index - 1];
    },
    getIndex: function (monthName) {
        return this.months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
    }
}*/

//a way to write a private functions and variables
// function monthUtils() {
//     const months = ['January', "Febuary", "March", "April", "May"];
//     // function getMonth(index) {
//     //     return months[index - 1];
//     // }
//     // function getIndex(monthName) {
//     //     return months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
//     // }

//     return {
//         // getMOnth: getMonth,
//         getMonth: (index) => months[index-1],
//         //getIndex: getIndex
//         getIndex: (monthName) => months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1,
//     }

// }

// const mu = monthUtils();
// console.log('mu.getIndex("january")', mu.getIndex("january"));


const mu = (function() {
    const months = ['January', "Febuary", "March", "April", "May"];
    // function getMonth(index) {
    //     return months[index - 1];
    // }
    // function getIndex(monthName) {
    //     return months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1;
    // }

    return {
        // getMOnth: getMonth,
        getMonth: (index) => months[index - 1],
        //getIndex: getIndex
        getIndex: (monthName) => months.findIndex(m => m.toLowerCase() === monthName.toLowerCase()) + 1,
    }

})();

console.log('mu.getIndex("january")', mu.getIndex("january"));