'use strict';

/*
Сделать функцию, которая принимает пользователя и 
проверяет, есть ли у него сегодня день рождения или нет
*/

const user = {
	name: 'Oleg',
	birthday: '02/04/2022',
};

function isBirthdayToday(user) {
	const now = new Date();
	const userBirthday = new Date(user.birthday);
	const nowMonth = now.getMonth();
	const nowDate = now.getDate();
	const userMonth = userBirthday.getMonth();
	const userDate = userBirthday.getDate();

	if (nowMonth === userMonth && nowDate === userDate) {
		return true;
	} else {
		return false;
	}
}

console.log(isBirthdayToday(user));
