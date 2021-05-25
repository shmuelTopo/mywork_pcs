class Account:
    _number_of_account = 0
    _next_account_number = 10000

    def __init__(self, account_holder, opening_balance):
        self._account_holder = account_holder
        Account._number_of_account += 1
        self._account_number = self._next_account_number
        Account._next_account_number += 1
        #self._balance = opening_balance
        self._balance = 0
        self.transaction(opening_balance)

    def get_account_holder(self):
        return self._account_holder

    def get_balance(self):
        return self._balance

    def __repr__(self):
        return f'Account({self._account_holder}, {self._balance})'

    @classmethod
    def get_number_of_account(cls):
        return Account._number_of_account

    def transaction(self, amount):
        self._balance += amount

    def __str__(self):
        return f''' 
Account Holder: {self._account_holder}
Account Number: {self._account_number}
Balance:        {self._balance}
'''


a1 = Account('Joe', 1000)
print(a1)
accounts = [a1]
print(accounts)

a1.transaction(50)
print(a1)

a1.transaction(-100)
print(a1)

print(Account.get_number_of_account())

a2 = Account('Kamala', 2000)
print(Account.get_number_of_account())

print(a2)


class Minimum_Balance_Account(Account):
    _minimum_allowed = 1000

    def transaction(self, amount):
        if self._balance + amount < Minimum_Balance_Account._minimum_allowed:
            raise Exception(
                f'{self._balance} + {amount} would be less then minimum {Minimum_Balance_Account._minimum_allowed}')
        return super().transaction(amount)


# a3 = Minimum_Balance_Account('Jen', 1200)
# print(a3)

# a3.transaction(-300)
