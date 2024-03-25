'use strict';

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 100; i++) {
	const el = document.createElement('div');
	el.innerHTML = `Пользователь с id ${i}`;
	el.setAttribute('data-id', i);
	// el.addEventListener('click', function () {
	// 	console.log(`Deleted user  ${i}`);
	// });
	wrapper.append(el);
}

wrapper.addEventListener('click', function (e) {
	const i = e.target.getAttribute('data-id');
	console.log(`Deleted user  ${i}`);
});
