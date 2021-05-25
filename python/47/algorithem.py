from random import randint


def get_radom_numbers(how_many, min, max):
    # numbers = []
    # for i in range(0, how_many):
    #     numbers.append(randint(min, max))
    # return numbers
    return [randint(min, max) for i in range(how_many)]


def selection_sort(list):
    first_unsorted = 0

    while first_unsorted < len(list) - 1:
        min_index = first_unsorted
        for i in range(min_index + 1, len(list)):
            if list[i] < list[min_index]:
                min_index = i

        # temp = list[first_unsorted]
        # list[first_unsorted] = list[min_index]
        # list[min_index] = temp

        list[first_unsorted], list[min_index] = list[min_index], list[first_unsorted]
        first_unsorted += 1


some_numbers = get_radom_numbers(10, 25, 65)
print(some_numbers)

selection_sort(some_numbers)
print(some_numbers)


def bubble_sort(list):
    sorted = False
    while not sorted:
        sorted = True
        last_to_check = len(list) - 1
        for i in range(1, last_to_check):
            if list[i-1] > list[i]:
                sorted = False
                list[i-1], list[i] = list[i], list[i-1]
                last_to_check -= 1


some_numbers = get_radom_numbers(10, 25, 65)
print(some_numbers)

bubble_sort(some_numbers)
print(some_numbers)


def insertion_sort(list):
    for i in range(1, len(list)):
        x = i
        while x > 0 and list[x] < list[x-1]:
            list[x], list[x-1] = list[x-1], list[x]
            x -= 1
        



some_numbers = get_radom_numbers(10, 25, 65)
print(some_numbers)

insertion_sort(some_numbers)
print(some_numbers)
