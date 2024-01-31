'use strict';

const weatherMap = new Map();

weatherMap.set('London', '10').set('Moscow', '7');

console.log(weatherMap.get('Moscow'));
console.log(weatherMap.get('not found'));

console.log(weatherMap.has('Moscow'));
console.log(weatherMap.has('not found'));

console.log(weatherMap.delete('London'));
weatherMap.clear();

const arr = [1, 2, 3]

weatherMap
    .set(1, 5)
    .set(true, 'yes')
    .set(false, 'no')
    .set(arr, 'array')
    .set({a: 1}, {b: 1})



console.log(weatherMap);
console.log(weatherMap.size);

console.log(weatherMap.get(arr))
console.log(weatherMap.get({a: 1}))
