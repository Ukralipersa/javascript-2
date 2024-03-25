'use strict';

const button = document.querySelector('.button');

const eventHandler = event => {
	console.log('1');
};

button.addEventListener('mouseover', eventHandler);

button.addEventListener('click', event => {
	console.log('2');
	button.removeEventListener('click', eventHandler);
});
