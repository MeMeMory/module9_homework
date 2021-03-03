/*Задание 5.
Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
	Заголовок первого input — «номер страницы».
	Заголовок второго input — «лимит».
	Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:
	Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
	Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
	Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
	Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
*/

const btn = document.getElementById("btn");
const error = document.querySelector(".error");
const image = document.querySelector(".images");
const data = localStorage.getItem("localData");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	error.textContent = "";
	image.innerHTML = "";

	let valuePage = document.getElementById("page").value;
	let valueLimit = document.getElementById("limit").value;

	if ((valuePage > 10 || valuePage < 1) && (valueLimit > 10 || valueLimit < 1)) {
		let error = "Номер страницы и лимит вне диапазона от 1 до 10";
		error.textContent = error;
	} else if (valuePage > 10 || valuePage < 1) {
		let error = "Номер страницы вне диапазона от 1 до 10";
		error.textContent = error;
	} else if (valueLimit > 10 || valueLimit < 1) {
		let error = "Лимит вне диапазона от 1 до 10";
		error.textContent = error;
	} else {
		fetch(`https://picsum.photos/v2/list?page=${valuePage}&limit=${valueLimit}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				localStorage.setItem("localData", JSON.stringify(data));
				showImgs(data);
			})
			.catch((e) => {
				console.log("Ошибка запроса", e);
			});
	}
});

function showImgs(data) {
	if (data) {
		data.forEach((obj) => {
			let img = document.createElement("img");
			img.setAttribute("src", obj.download_url);
			img.setAttribute("width", "320px");
			image.appendChild(img);
		});
	}
}
showImgs(JSON.parse(data));