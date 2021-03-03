/* Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function electricDevise(voltHour) {
	this.voltHour = voltHour * 0.001;
}

electricDevise.prototype.consumptionDay = function (hour) {
	console.log(`${this.name} потребляет за ${hour} ч. - ${hour * this.voltHour} киловатт`);
};

electricDevise.prototype.plugInOut = function () {
	if (this.plug == true) {
		console.log(`Прибор ${this.name} подключен к сети. В количестве ${this.number} единицы.`);
	} else {
		console.log(`Прибор ${this.name} не подключен к сети`);
	}
}

function light(name, power, number, plug) {
	this.name = name;
	this.power = power;
	this.number = number;
	this.plug = plug;
	this.amount = power * number;
}
light.prototype = new electricDevise(75);

function computer(name, power, number, plug) {
	this.name = name;
	this.power = power;
	this.number = number;
	this.plug = plug;
	this.amount = power * number;
}
computer.prototype = new electricDevise(250);

const roomLamp = new light('Лампочка 75W', 75, 3, true);
const kitchenLamp = new light('Лампочка 55W', 55, 1, true);
const pc = new computer('desktop', 250, 1, true);
const laptopLenovo = new computer('laptop', 150, 1, false);

roomLamp.plugInOut();
kitchenLamp.plugInOut();
kitchenLamp.consumptionDay(24);
pc.plugInOut();
pc.consumptionDay(8);
laptopLenovo.plugInOut();


// let electricArr = [roomLamp, kitchenLamp, pc, laptop];
// let total = 0;

// electricArr.forEach(function (element) {
// 	let total = element.amount;
// 	console.log(total);
// 	for (var i = 0, len = total.length; i < len; i++) {
// 		total += myData[i];
// 	}
// });