'use strict';
function ourEvery(anArray, callback){
    // let allPassed = true;
    // anArray.forEach(e => {
    //     const passed = callback(e);
    //     if (!passed) {
    //         allPassed = false;
    //     }
    // });
    // return allPassed;

    for(let i = 0; i < anArray.length; i++){
        if (!callback(anArray[i])) {
            return false;
        }
    }
    return true;
}

const upper = ['A', 'B', 'C', 'D'];
const lower = ['a', 'b', 'c', 'd'];
const mixed = ['A', 'b', 'C', 'd'];

function isUpper(char){
    return char === char.toUpperCase();
}

const isUpper2 = c => c === c.toUpperCase;

console.log(`ourEvery(upper, isUpper); ${ourEvery(upper, isUpper)}`);
console.log(`ourEvery(lower, isUpper); ${ourEvery(lower, isUpper)}`);
console.log(`ourEvery(lower, isUpper); ${ourEvery(lower, isUpper2)}`);
console.log(`ourEvery(mixed, isUpper); ${ourEvery(mixed, (char) => char === char.toUpperCase())}`);

// Compare to real one
console.log(`upper.every(isUpper); ${upper.every(isUpper)}`);
console.log(`lower.every(isUpper); ${lower.every(isUpper)}`);
console.log(`mixed.every(isUpper); ${mixed.every(isUpper)}`);


function ourSome(anArray, callback){
    // let someonePassed = false;
    // anArray.forEach( e => {
    //     if(callback(e)){
    //         someonePassed = true;
    //     }
    // })
    // return someonePassed;
    for(let i = 0; i < anArray.length; i++){
        if(callback(anArray[i])){
            return true;
        }
    }
    return false;
}

console.log(`ourSome(upper, isUpper); ${ourSome(upper, isUpper)}`);
console.log(`ourSome(lower, isUpper); ${ourSome(lower, isUpper)}`);
console.log(`ourSome(mixed, isUpper); ${ourSome(mixed, (char) => char === char.toUpperCase())}`);

// Compare to real one
console.log(`upper.some(isUpper); ${upper.some(isUpper)}`);
console.log(`lower.some(isUpper); ${lower.some(isUpper)}`);
console.log(`mixed.some(isUpper); ${mixed.some(isUpper)}`);

function onlyIf(anArray, test, action) {
    // for(let i = 0; i > anArray.length; i++){
    //     if(test(anArray[i])){
    //         action(anArray[i]);
    //     }
    // }
    anArray.forEach(element => {
        if(test(element)){
            action(element);
        }
    });
}

console.log("---------------------------------");
console.log('onlyIf(mixed, isUpper, console.log)');
onlyIf(mixed, isUpper, console.log);
console.log("---------------------------------");
console.log('onlyIf(lower, isUpper, console.log)');
onlyIf(lower, isUpper, console.log);
console.log("---------------------------------");
console.log('onlyIf(upper, isUpper, console.log)');
onlyIf(upper, isUpper, console.log);

console.log('---------------------------------');
console.log('mixed.filter(isUpper).forEach(e => console.log(e))');
mixed.filter(isUpper).forEach(e => console.log(e));


function multiply(a, b) {
    return a * b;
}

console.log(`multiply(2,2) -> ${multiply(2,2) }`);

function getMultiplier(){
    // return(a, b) => a * b;

    return multiply;
}

const multiplier = getMultiplier();

console.log(`multiplier(3,3) -> ${multiplier(3,3)}`);

console.log(`getMultiplier()(3,3) -> ${getMultiplier()(3, 3)}`);

function getMultiplierByNumber(a){
    return (b) => a * b;
}

const multiplierBy5 = getMultiplierByNumber(5);
console.log(`multiplierBy5(2) -> ${multiplierBy5(2)}`);

console.log(`getMultiplierByNumber(3)(4) -> ${getMultiplierByNumber(3)(4)}`);