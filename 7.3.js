/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/

const emptyObj = () => Object.create(null);
console.log(emptyObj(emptyObj))