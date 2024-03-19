'use strict';

/*

Сделать класс врага со здоровьем и методом получения урона
Сделать класс меча, который имеет силу и метод нанесения
урона
Сделать класс орка, который в 50% случаев не получает урон

*/

class Enemy {
	health;
	constructor(health) {
		this.health = health;
	}

	receiveDamage(damage) {
		this.health = this.health - damage;
		console.log(this.health);
	}
}

class Sword {
	#damage;
	constructor(damage) {
		this.#damage = damage;
	}

	strike(enemy) {
		enemy.receiveDamage(this.#damage);
	}
}

class Orc extends Enemy {
	constructor(health) {
		super(health);
	}

	receiveDamage(damage) {
		if (Math.random() > 0.5) {
			this.health = this.health - damage;
			console.log(this.health);
		} else console.log(this.health);
	}
}

const enemy = new Orc(10);
const sword = new Sword(3);

sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
