'use strict';

function printPerson(person) {
    console.log(person.name, person.age)
}

const potus = {
    name: 'Joe Biden',
    age: 100,
    print: function () {
        console.log(this.name, this.age);
    }
};
console.log(potus);
printPerson(potus);
potus.print();

const flotus = {
    name: 'Jill Biden',
    age: 75,
    print: function () {
        console.log(this.name, this.age);
    }
};
console.log(flotus);
printPerson(flotus);
flotus.print();


function createPerson(name, age) {
    return {
        name: name,
        age: age,
        print: function () {
            console.log(this.name, this.age);
        },
        printWithoutThis: function () {
            console.log(name, age);
        }
    };
}

const psaki = createPerson('Jan Psaki', 50);
console.log(psaki);
printPerson(psaki);
psaki.print();

const fauci = createPerson("Fauci", 80);
console.log(fauci);
printPerson(fauci);
fauci.print();

console.log('--------Using \'this\' inside object vs. not using \'this\'--------')
fauci.age = 81;
fauci.print();
fauci.printWithoutThis();



///////////////////////////
/*
<Person>
    <name>Joe</name>
    <age>100</age>
</Person>

<Person name="Joe" age="100"/>
*/
fauci.statemetns = ['no mask', 'mask', 'no mask', 'mask']

console.log(fauci);
console.log(JSON.stringify(fauci));

const reconstitutedFauci = JSON.parse(JSON.stringify(fauci));
console.log(reconstitutedFauci);

//reconstitutedFauci.print() //won't work since JSON.stringify dropped it

const reconstitutedFauci2 =  createPerson(reconstitutedFauci.name, reconstitutedFauci.age);
reconstitutedFauci2.print()

