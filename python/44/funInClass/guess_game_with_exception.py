import random


def checkNum(pc_num, user_num):
    try:
        user_num = int(user_num)
        if user_num > 100 or user_num < 1:
            raise TypeError('Please pick a number between 1-100')
        elif user_num < pc_num:
            raise TypeError('The number you guessed is too low')
        elif user_num > pc_num:
            raise TypeError('The number you guessed is too high')
        else:
            raise TypeError('You won')
    except ValueError:
        raise TypeError('Please enter a real number')


global the_number 
the_number = random.randint(1, 100)
guess = 0
print('I guessed a number between 1-100 Please guess it')
while guess != the_number:
    guess = input('Guess the number... ')
    try:
        checkNum(the_number, guess)
    except TypeError as error:
        print(error)
print('You won!')
