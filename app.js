'use strict';
/* Необходимо поменять местами ключи и значения в следующем Map */
const weatherMap = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14],
]);

const weatherMap2 = new Map(
	[...weatherMap].map(([key, value]) => [value, key])
);

console.log(weatherMap2);
