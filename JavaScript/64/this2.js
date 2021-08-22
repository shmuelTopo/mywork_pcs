(function() {
    'use strict';
    
    const greeter1 = {
        greeting: 'Hello'
    };

    const greeter2 = {
        greeting: 'Shalom'
    };

    function greet(name, age){
        console.log(this.greeting, name, age);
    }

    //greet('Joe');

    greet.call(greeter1, 'joe',103);
    greet.call(greeter2, 'joe', 103);

    greet.apply(greeter1, ['kamila', 60]);
    greet.apply(greeter2, ['kamila', 60]);

    const sayHello = greet.bind(greeter1);
    sayHello('Joe Biden', 103);

    const sayShalomToKamala = greet.bind(greeter2, 'kamala');
    sayShalomToKamala(60);

    const sayShalomToKamala60 = greet.bind(greeter2, 'kamala', 60);
    sayShalomToKamala60();

    /////////

    const potus = {
        name: 'Joe Biden',
        age: 103,
        // print: () => console.log(this.name, this.age);
        // print: function() {
        //     console.log(this.name, this.age);
        // }
        
        print: function() {
            //const arrowPrintFunction = () => console.log(this.name, this.age);
            //arrowPrintFunction();
            (() => console.log(this.name, this.age))();
        }
        /*
        addThePrint: function(){
            this.print = () => console.log(this.name, this.age);
        }*/
    }; 

    //potus.addThePrint();
    potus.print();

}());