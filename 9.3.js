/*Задание 3.
Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
 */

const btn = document.getElementById("btn");
const errorE3 = document.querySelector(".error");
const image = document.querySelector(".images");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	errorE3.textContent = "";
	image.innerHTML = "";
	let value = document.querySelector("input").value;
	if (value > 0 && value <= 10) {
		const xhr = new XMLHttpRequest();

		xhr.onload = function () {
			let data = JSON.parse(xhr.response);

			data.forEach((obj) => {
				let img = document.createElement("img");
				img.setAttribute("src", obj.download_url);
				img.setAttribute("width", "320px");
				image.appendChild(img);
			});
			console.log(data);
		};
		xhr.onerror = function () {
			console.log("Ошибка запроса");
		};
		xhr.open("get", `https://picsum.photos/v2/list?limit=${value}`, true);
		xhr.send();
	} else {
		let error = "число вне диапазона от 1 до 10";
		errorE3.textContent = error;
	}
});