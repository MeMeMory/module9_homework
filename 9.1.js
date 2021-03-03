/* Задание 1.
Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/

const xmlString = `
<list>
<student>
	<name lang="en">
		<first>Ivan</first>
		<second>Ivanov</second>
	</name>
	<age>35</age>
	<prof>teacher</prof>
	</student>
<student>
	<name lang="ru">
		<first>Петр</first>
		<second>Петров</second>
	</name>
	<age>58</age>
	<prof>driver</prof>
</student>
</list>
`;
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml')
const listNode = xmlDOM.querySelectorAll('student')

const students = []
for (let i = 0; i < listNode.length; i++) {
	let student = listNode[i];
	
	let firstName = student.querySelector('first').textContent
	let secondName = student.querySelector('second').textContent
	let age = Number(student.querySelector('age').textContent)
	let prof = student.querySelector('prof').textContent
	let lang = student.querySelector('name').getAttribute('lang')

	let studentObj = {}
	studentObj.name = `${firstName} ${secondName}`
	studentObj.age = age
	studentObj.prof = prof
	studentObj.lang = lang
	students.push(studentObj);
}

console.log(students);