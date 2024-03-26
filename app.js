'use strict';

/*
  Динамически создать N элементов с текстом и поле
  для поиска. При вводе в поле, выделять элементы,
  которые содержат введенный текст
*/
const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 100; i++) {
	let el = document.createElement('div');
	el.innerHTML = i;
	wrapper.append(el);
}

function search(event) {
	let inputValue = event.target.value;
	for (let el of [...wrapper.children]) {
		if (el.innerHTML.includes(inputValue)) {
			el.classList.add('yellow');
			continue;
		}
		el.classList.remove('yellow');
	}
}
