(function () {
    'use strict';

    function doSomething(){
        console.log(this);
    }

    doSomething();

    const potus = {
        first: 'joe',
        last: 'biden',
        age: 100,
        print1 : function() {
            console.log(this.first, this.last, this.age);
        },
        /*print: () => {
            console.log(this.first, this.last, this.age)
        },*/
        grow: function () {
            /*setInterval(function() {
                this.age++;
                this.print1();
            }, 1000);*/

            setInterval(() => {
                this.age++;
                this.print1();
            }, 1000);

            /*const that = this;
            setInterval(function() {
                that.age++;
                that.print1();
            }, 1000);*/
            
            /*function doTheGrowing() {
                this.age++;
                this.print1();
            }*/
            
            const actuallyGrowing = doTheGrowing.bind(this);
            setInterval(actuallyGrowing, 1000);
        }
    };

    potus.print1();
    potus.grow();

    // const potusPrint = potus.print;
    // potusPrint();
}());