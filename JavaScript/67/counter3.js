(function(){
    'use strict';
    /*global app*/

    for (let j = 0; j < 10; j++) {
        app.counter1.increment();
    }

    const counter2a = app.counter2.createCoutner();
    for (let j = 0; j < 5; j++) {
        counter2a.increment();
    }

    const counter2b = app.counter2.createCoutner();
    for (let j = 0; j < 15; j++) {
        counter2a.increment();
    }

    // for (let j = 0; j < 5; j++) {
    //     counter2.increment();
    // }

    console.log(app.counter1.getCount(), counter2a.getCount(), counter2b.getCount());
}());


