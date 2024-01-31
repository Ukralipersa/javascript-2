'use strict';

const flights = ['Russia', 'USA', 'London', 'USA'];

const setFlights = new Set(flights);
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Russia'));
// setFlights.clear();
setFlights.add('Paris');
setFlights.delete('London');
console.log(setFlights);

for (const flight of setFlights) {
	console.log(flight);
}

console.log([...setFlights]);

const serObj = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]);
console.log(serObj);
console.log(new Set('abcd'));
