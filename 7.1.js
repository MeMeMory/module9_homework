/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
*/

const honda = {
	color: "red",
	wheels: 4,
	engine: true,
}
honda.upgrades = true;

const bmw = Object.create(honda);
bmw.color = "pink";
bmw.wheels = 4;
bmw.upgrades = true;

function ownProp(honda) {
	for (let prop in honda) {
		if (honda.hasOwnProperty(prop)) {
			console.log(prop)
		}
	}
}
ownProp(honda)