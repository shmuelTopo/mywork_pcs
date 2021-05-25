from random import randint


class Die:
    def __init__(self, num_sides):
        self._sides = num_sides
        self._value = 1

    def value(self):
        return self._value

    def roll(self):
        self._value = randint(1, self._sides)
        return self._value
    
    def __str__(self) -> str:
        return f'sides: {self._sides}, value: {self._value}'


class Six_Sided_Die(Die):
    def __init__(self, num_sides):
        super().__init__(num_sides)


d = Die(12)

print(d)

for i in range(10):
    d.roll()
    print(d)

