from typing import Union


def print_days_in_month_dict():
    months_days = {
        "january": 31,
        "Fabruary": 28,
        "March": 31
    }

    for month in months_days:
        print(f'{month} => {months_days[month]}')

    for month, day in months_days.items():
        print(f'{month} => {day}')


print_days_in_month_dict()


def get_days_in_month(month: str) -> Union[int, None]:
    months_days = {
        "January": 31,
        "Fabruary": 28,
        "March": 31
    }
    # if month in months_days:
    #    return months_days[month]
    # return -1

    return months_days.get(month.title(), -1)


month_to_get = 'January'
print(f'{month_to_get} has {get_days_in_month(month_to_get)} days')

month_to_get = 'january'
print(f'{month_to_get} has {get_days_in_month(month_to_get)} days')

month_to_get = 'foo'
print(f'{month_to_get} has {get_days_in_month(month_to_get)} days')

