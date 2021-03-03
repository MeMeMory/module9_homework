/* Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/

const honda = {
	color: "red",
	wheels: 4,
	engine: true,
	transmission: "four-wheel drive",
};

const string = "engine";

function checkingObj(obj, str) {
	for (let key in obj) {
		if (key == str) {
			return true
		}
	}
	return false
};
console.log(checkingObj(honda, string));