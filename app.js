'use strict';

/*
Написать функцию, которая принимает min и max
и возвращает случайное целое число между ними, включая их
*/

function getRandomIntInclusive(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
