from math import floor, ceil
name = 'Joe Biden "kamala"'
print(name)
name2 = 'kamala Harris\'\\ \nA new line'
print(name2)

autoConcatenate = 'One ' 'two ' 'three ' 'four'
print(autoConcatenate)

print('Before')
print('''this is line one
this is line two
this is line three
''')
print('After')

print(name.upper())
print(name.lower())
print('here is some text'.title())

print(name)

print(name.replace('Joe', 'kamala'))
print(name)

name = name.replace('Joe', 'kamala')
print(name)

first = "Joe"
last = 'Biden'
print(f'First: {first}, Last: {last}')
print('First: {}, Last: {}'.format(first, last))

#          -3      -2        -1
#           0       1         2
students = ['Joe', 'Kamala', 'Jan', 'sam', 'Bob', 'Time']
print(students)

print(len(students))
print(len(name))

print(students[0])
print(students[-1])

print(name[5])

print(name[2:])
print(name[2:10])
print(name[:10])
print(name[2:15:2])
print(name[::2])

print(name[::-1])

print(students[2:5:2])
students.reverse()
print(students)

students.append('Geroge')
print(students)

print('Hello ' * 2)
print(students * 2)

people = ['Joe']
#people[2] = 'Kamala'
people.append('Kamala')

people.append(['sam', 'Bob'])
print(people)

people.extend(['George', 'Tim'])
print(people)

people.pop()
print(people)

people.insert(2, 'New #2')
people.remove('New #2')
print(people)

ref = people

people.append('New one')
print(ref)

copy = people[::]
people.append('Another new one')
print(copy)
print(people)

some_more_people = ['Donald', 'Mike']
people.append(some_more_people)
print(people)
copy2 = people.copy()
people.append('Yet another new one')
some_more_people.append('This will be in copy2')
print(copy2)
print(people)

copy2.clear()
print(copy2)

people = ['Sam', None, None]
people[2] = 'joe'
print(people)

people = [None] * 100
print(people)

print(name.find('Biden'))
print(name.find('biden'))

print(name.index('Biden'))
# print(name.index('biden'))

people.append('Joe')
perosn_to_look_for = "sam"
try:
    print(people.index(perosn_to_look_for))
except ValueError as e:
    print(f'OOPS no {perosn_to_look_for} in list - {e}')
except:
    print('Some other error')
else:
    print(f'YAY! we found {perosn_to_look_for}!')
finally:
    print('All done')


if(perosn_to_look_for in people):
    print(f'found person at {people.index(perosn_to_look_for)}')
    print('We see this only if found')
else:
    print(f'{perosn_to_look_for} is not in list')
print('We always see this')

x = 20
if x < 10:
    print('x is < 10')
elif x < 20:
    print('x is < 20')
else:
    print('x >= 20')

# && || = and or
if 'j' in name and 'b' in name:
    print('There is a j!')
else:
    print('no j and b')

x = 10 / 3
print(x)

x = 10 // 3
print(x)
print(abs(-100))
# print(math.ceil(3.33))
# print(math.floor(3.33))
print(ceil(3.33))
print(floor(3.33))

name = 'Joe'  # input('What is your name? ')
print(f'Hello {name}!')

age = 34
while age == -1:
    try:
        age = int(input('What is your age? '))
    except ValueError as e:
        print('Please enter a valid age!')

print(f'You will be 100 in {100 - age} years')

# z = x > 5 ? x : 5

message = 'You can but alcohol' if age > 21 else 'You can not buy alcohol'
print(message)

name = 'Joe Biden'
for letter in name:
    print(letter)

for val in people:
    print(val)

for i in range(len(name)):
    print(f'{i} - {name[i]}')

for i in range(len(people)):
    print(f'{i} - {people[i]}')

for i in range(10, 20, 2):
    print(i)

for person in people:
    if(person == 'Sam'):
        print('Found sam')
        break
else:
    print('We did not find sam (break)')

for index, value in enumerate(people):
    print(f'{index} - {value}')

people = ['Joe', 'Kamala', 'Jan']
scores = [25, 50, 75]

for name, score in zip(people, scores):
    print(name, score)

myTuple = (1, 2, 3, 4, 5)
for x in myTuple:
    print(x)

anotherTuple = 6, 7, 8
for x in anotherTuple:
    print(x)

empty_tuple = ()  # here need ()

tuple_of_one = (1,)  # or = 1,
for x in anotherTuple:
    print(x)

#a = myTuple[0]
#b = myTuple[1]
#c = myTuple[2]
#d = myTuple[3]
#e = myTuple[4]

a, b, c, d, e = myTuple
print(a, b, c, d, e)

a, b, c, *the_rest = myTuple
print(a, b, c, the_rest)

a, b, *the_rest, the_last = myTuple
print(a, b, c, the_rest, the_last) 