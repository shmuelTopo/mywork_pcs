from random import randint


def increment(number, by=1):
    print(f'inside incement {number} {by}')
    return number + by


print(increment(5, 2))
print(increment(5))
#print(increment('hello', 5))
print(increment('hello ', 'world'))

print(increment(by=5, number=2))

print(f'{5} {6}', 'foo', sep=",", end='-')
print('bar')

print(f'{5} {6}', 'foo', ',', '-')


def add(numbers):
    total = 0
    for number in numbers:
        total += number
    return total


print(add([1, 2, 3]))
print(add((1, 2, 3)))


def add2(*numbers):
    total = 0
    for number in numbers:
        total += number
    return total


print(add2(1, 2, 3))


def add_user(**user):
    print(user)
    print(user.get('name', 'no name'))


# add_user('Joe')
add_user(name='Joe', email='', foo='bar')
add_user(bar='foo')


def choise(seq):
    spot = randint(0, len(seq) - 1)
    return seq[spot]

print(choise('hello'))

for x in range(0,20):
    print(choise(['apple', 'banana', "pear", 100, 37]))

import random
print(random.choice((['apple', 'banana', "pear", 100, 37])))


x = 5
print(x)

def use_x():
    global x
    x = 15
    print(x)

use_x()
print(x)

if False:
    z = 6
else:
    z = None

print(z)