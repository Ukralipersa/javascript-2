'use strict';

class Film {
	#name;
	#author;
	raiting;
	#length;

	constructor(name, author, length) {
		this.#name = name;
		this.#author = author;
		this.#length = length;
	}

	get name() {
		return this.#name;
	}
	get author() {
		return this.#author;
	}
	get length() {
		return this.#length;
	}
}

let film = new Film('Avatar', 'Cameron', 240);
console.log(film);
