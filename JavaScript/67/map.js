(function () {
    'use strict';
    function ourMap(theArray, callback){
        const result = [];

        theArray.forEach(v => {
            result.push(callback(v));
        });
        return result;
    }

    const numbers = [2,4,6];
    const doubleNumbers = ourMap(numbers, function (n) {
        return n*2;
    });

    const tripleNumbers = ourMap(numbers, n => n * 3);

    console.log(numbers, doubleNumbers, tripleNumbers);

    const people = [
        {first: 'Joe', last: 'Biden', age: 100},
        {first: 'Kamla', last: 'Haris', age: 55},
        {first: 'Tony', last: 'Blinken', age: 60}
    ];

    console.log(ourMap(people, p => `${p.first} ${p.last}`));
    console.log(people.map(p => `${p.first} ${p.last}`));

})();