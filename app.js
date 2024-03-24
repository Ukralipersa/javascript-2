'use strict';

console.log(document.head);
console.log(document.body);

const el1 = document.querySelector('.wrapper');
const el2 = document.querySelectorAll('meta');
console.log('el2:', el2);
console.log('el1:', el1);
const el3 = document.getElementsByClassName('wrapper');
const el4 = document.getElementsByTagName('meta');
console.log('el3:', el3);
console.log('el4:', el4);

const button1 = document.createElement('button');
button1.innerText = 'test1';

const button2 = document.createElement('button');
button2.innerText = 'test2';

el1.append(button1);
// el1.prepend(button2);
// el1.before(button2);
el1.after(button2);

function generate() {
	el1.remove();
}
