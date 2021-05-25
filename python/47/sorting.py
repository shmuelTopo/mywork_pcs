from random import randint
#import account
from account import Account

numbers = []
for i in range(10):
    numbers.append(randint(1, 100))

print(numbers)

print(sorted(numbers))

# numbers = sorted(numbers)

numbers.sort()

print(numbers)

print(sorted((3,2,1)))

numbers.clear()
for i in range(10):
    numbers.append(randint(1, 100))

print(sorted('Joe Biden'))
print(sorted('Joe Biden', key=str.lower))


a1 = Account('Joe', 2000)
print(a1)

a2 = Account('Trump', 3000)
print(a2)

a3 = Account('Kamala', 1000)
print(a3)



accounts = [a1, a2, a3]
print(accounts)
print(sorted(accounts, key=lambda account: account._account_holder))
print(sorted(accounts, key=lambda account: account.get_balance()))
