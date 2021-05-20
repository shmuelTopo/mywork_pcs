class Employee1:
    pass


def __str__(self):
    return 'Hi there'


joe = Employee1()
print(joe)

joe.first = 'Joe'
joe.last = 'Biden'

print(f'{joe.first} {joe.last}')


class Employee:
    raise_percent = 1.05

    def __init__(self, first, last, department=None, salary=35000):
        self._first = first
        self._last = last
        self._department = department
        self._salary = salary
        # print(self)
        # print(self.__str__())
        print(self.__str())

    def get_first(self):
        return self._first

    def set_first(self, first):
        if first == None:
            raise ValueError('First name cannot be None')
        self._first

    def print(self):
        print(
            f'First: {self._first} Last: {self._last} Department: {self._department} Salary: {self._salary}')

    def __str__(self) -> str:
        return f'First: {self._first} Last: {self._last} Department: {self._department} Salary: {self._salary}'

    def __repr__(self):
        return f'Employee({self._first}, {self._last}, {self._department}, {self._salary})'

    def raise_salary(self):
        self._salary *= self.raise_percent

    def set_self_raise_percent(self, raise_percent):
        self.raise_percent = raise_percent

    @classmethod
    def set_raise_percent(cls, raise_percent):
        cls.raise_percent = raise_percent

    @staticmethod
    def getDepartment():
        return['Pluming', 'Sales', 'Marketing']

    __str = __str__


kamala = Employee('Kamala', 'Harris')
print(kamala)
#print(f'{kamala.first} {kamala.last} {kamala.department} {kamala.salary}')
kamala.print()

myorkis = Employee('Alejandro', 'Myorkis', 'DHS')
print(myorkis)
#print(f'{myorkis.first} {myorkis.last} {myorkis.department} {myorkis.salary}')
myorkis.print()


another = Employee('Another', 'Guy', salary=50000)
print(another)
#print(f'{another.first} {another.last} {another.department} {another.salary}')
another.print()

some_employees = [myorkis, kamala]
print(some_employees)

kamala.raise_percent = 1.1
#kamala._first = 'Mamelah'
#kamala._first = None
# kamala.set_first(None)

#Employee.raise_percent = 1.06
Employee.set_raise_percent(1.06)
for employee in some_employees:
    employee.raise_salary()
    print(employee)

print(Employee.getDepartment())


class Developer(Employee):
    def __init__(self, first, last, department, salary, language):
        super().__init__(first, last, department, salary)
        self._language = language

    def __str__(self):
        return super().__str__() + f' Language: {self._language}'

    __str = __str__


bill = Developer('Bill', 'Gates', 'Engineering', 100000, 'Basic')
print(bill)

print(bill.__dir__())
print(bill.__dict__)

class Not_An_Employee:
    pass

not_an_employee = Not_An_Employee()
not_an_employee._first = 'Im'
not_an_employee._last = 'Not an employee'
not_an_employee._department = 'IT'
not_an_employee._salary = 50000

Employee.print(not_an_employee)

printKamala = kamala.print

printKamala()