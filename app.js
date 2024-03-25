'use strict';

const button = document.querySelector('.button');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', function (e) {
	console.log('button');
	console.log(e.target);
	console.log(e.currentTarget);

	this.style.backgroundColor = 'purple';
	e.stopPropagation();
});

inner.addEventListener(
	'click',
	function (e) {
		console.log('inner');
		console.log(e.target);
		console.log(e.currentTarget);

		this.style.backgroundColor = 'blue';

		// e.stopPropagation();
	},
	true
);

wrapper.addEventListener(
	'click',
	function (e) {
		console.log('wrapper');
		console.log(e.target);
		console.log(e.currentTarget);

		this.style.backgroundColor = 'green';
	},
	true
);

wrapper.addEventListener('click', function (e) {
	console.log('wrapper');
	console.log(e.target);
	console.log(e.currentTarget);

	this.style.backgroundColor = 'green';
});
