import random
name = 'Joe Biden'
address = '1600 Pennslvania Ave'
children = ['bo', 'hunter', 'melissa']

print(f'name: {name}, Address: {address}, Children: {children}')

print(name[2::3])
print(children[::-2])
print(children[-2][1:-1])

for x in range(1, 11):
    line = ' '
    for y in range(1, 11):
        #line += '{:3d} '.format(x * y)
        line += f'{x * y :3d} '
    print(line)


the_number = random.randint(1, 100)
tries = 0
guess = 0
while guess != the_number:
    try:
        guess = int(input('Guess the number... '))

        if guess > 100 or guess < 1:
            print('Please pick a number between 1-100')
            continue

        tries += 1

        if guess < the_number:
            print('The number you guessed is too low')
        elif guess > the_number:
            print('The number you guessed is too high')
    except ValueError:
        print('Please enter a number only')

print(f'You won! It took you {tries} tries')


a = 5
b = 6
c = 27
the_numbers = {a, b, c}

more_numbers = [5, 6, 27]
