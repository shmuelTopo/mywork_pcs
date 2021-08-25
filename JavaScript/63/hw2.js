
/* globals calculator */

window.calculator = (function(){
    'use strict';
    let years;
    let rate;

    /*
    function setYears(y){
        years = y;
        // return window.calculator;
    }

    function setRate(r){
        rate = r;
        // return window.calculator;
    }
    */
    function calculateRate(principle) {
        let p = principle;
        for (let i = 0; i < years; i++) {
            p += Math.round(p * rate);
        }

        return p - principle;
    }

    return {
        setYears: function setYears(y) {
            years = y;
            return this;
            // return window.calculator;
        },
        setRate: function setRate(r) {
            rate = r;
            return this;
            // return window.calculator;
        },
        calculateRate: calculateRate
    };
}());

calculator.setYears(10);
calculator.setRate(0.1);
console.log('calculateRate(100)', calculator.calculateRate(100));

console.log('calculator.setYears(3).setRate(0.05).calculateRate(100)', calculator.setYears(3).setRate(0.05).calculateRate(100));