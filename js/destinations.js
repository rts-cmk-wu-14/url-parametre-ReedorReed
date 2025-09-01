const mainContainer = document.querySelector('#container');
const mainWrapper = document.querySelector('#wrapper');

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
	let li = data.facilities
		.map((element) => {
			return `<li>${element}</li>`;
		})
		.join('');

	const content = /*html */ `
    <section class="details">
        <figure>
            <img src="../img/${data.image}" class="details__image">
            <div class="details__favorite-btn">
                <img src="../img/heart.svg" class="details__heart-icon">
                <p class="details__favorite-btn-text">FAVORITE</p>
            </div>
        </figure>

        <article class="details__text-wrapper">
            <div class="details__header">
                <div class="details__location">${data.destination.toUpperCase()}</div>
                <h1 class="details__title">${data.subtitle}</h1>
            </div>

            <div class="details__description">
                <p>${data.text}</p>
                <div class="details__description-list">
                    <h2 class="details__description-list-heading">Facilities</h2>
                    <ul>
                        ${li}
                    </ul>
                </div>
            </div>
        </article>
    </section>
    `;

	mainWrapper.insertAdjacentHTML('beforeend', content);
}
