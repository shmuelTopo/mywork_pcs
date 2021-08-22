(function () {
    'use strict';
    /*jshint -W083, -W132*/
    const functions = [];
    // let will solve the problem below
    for(/*let*/var i = 0; i < 5; i++){

        //If using var in the loop this method will not work since they all have 
        //acces to the closer of the parent enviorment and the parent's i equals 5
        functions[i] = function(){
            console.log(i);
        };

        //Overwrite the above with a good way
        functions[i] = createFunction(i);

        // 3rd way by combinig the helper function inside the for loop
        functions[i] = function (x) {
            return function () {
                console.log(x);
            };
        };

        // 3rd way with arrow function
        functions[i] = function (x) {
            return () => console.log(x);
        };

        // 3rd way with even shorter way using double arrow functions
        functions[i] = (x) => () => console.log(x)(i);
    }

    // instead we can create a helper function
    function createFunction(x){
        // return function () {
        //     console.log(x);
        // };

        return () => console.log(x);
    }

    functions.forEach(f => f());
}());