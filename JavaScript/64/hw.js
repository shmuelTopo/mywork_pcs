(function() {
    'use strict';
    /*const account1 = {
        balance: 1000
    };

    const account2 = {
        balance: 2000
    };*/

    function transaction(amount) {
        this.balance += amount;
    }

    function createAccount(openingBalance){
        return {
            balance: openingBalance /*,
            preformTransaction: function(amount){
                this.balance += amount;
            }*/
        };
    }

    const account1 = createAccount(1000);
    const account2 = createAccount(2000);

    /*account1.preformTransaction(100);
    account1.preformTransaction(-10);

    account2.preformTransaction(100);
    account2.preformTransaction(-10);*/

    /*transaction.call(account1, 100);
    transaction.call(account1, -10);

    transaction.apply(account2, [100]);
    transaction.apply(account2, [-10]);*/

    const transactionAccount1 = transaction.bind(account1);
    transactionAccount1(-33);

    const withdraw5dollarsFromAccount2 = transaction.bind(account2, -5);
    withdraw5dollarsFromAccount2();

    console.log(account1, account2);



})();