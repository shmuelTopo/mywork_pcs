potus = {
    'first': 'Joe',
    'last': 'Biden'
}


print(f"{potus['first']} {potus['last']}")
#print(potus['brains'])
brains = potus.get('brains', 'very little')
print(brains)

if 'first' in potus:
    print(potus['first'])
else:
    print('no first')

potus['brains'] = 'some'

good_presidents = set(['trump', 'reagen', 'wahington'])
presidents = set(['biden', 'obama', 'carter', 'reagen'])

print(good_presidents.union(presidents))
print(good_presidents.intersection(presidents))

for president in presidents:
    if president in good_presidents:
        print(f'{president} was a good president')
    else:
        print(f'{president} was not a good presidetn')

cant_change = frozenset(['ice cream', 'sherbet', 'ices'])
#cant_change.add('ice')