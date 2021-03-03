/* Задание 4.
Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
 */

const btn = document.getElementById("btn");
const error = document.querySelector(".error");
const image = document.querySelector(".images");

btn.addEventListener("click", (e) => {
	e.preventDefault();
	error.textContent = "";
	image.innerHTML = "";
	let value1 = document.getElementById("input").value;
	let value2 = document.getElementById("input2").value;
	if (value1 <= 300 && value1 >= 100 && value2 <= 300 && value2 >= 100) {
		fetch(`https://picsum.photos/${value1}/${value2}`)
			.then((response) => {
				let img = document.createElement("img");
				img.setAttribute("src", response.url);
				image.appendChild(img);
			})
			.catch((event) => {
				console.log("Ошибка запроса", event);
			});
	} else {
		let errorText = "одно из чисел вне диапазона от 100 до 300";
		error.textContent = errorText;
	}
});