const mainContainer = document.querySelector('#container');

let params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(id);

fetch(`../data/${id}.json`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		showData(data);
	});

function showData(data) {
	const content = `<h2>${data.title}</h2>`;

	mainContainer.insertAdjacentHTML('beforeend', content);
}
