const mainContainer = document.querySelector('#container');
const mainWrapper = document.querySelector('#wrapper');

fetch('../data/destinations.json')
	.then((response) => response.json())
	.then((data) => {
		content(data.destinations);
	});

function content(destinations) {
	const destinationDom = destinations
		.map((destination) => {
			return /*html */ `
            <figure class="card">
                <img src="../img/${destination.image}" class="card__image">
                <figcaption class="card__description">
                    <h2 class="card__title">${destination.title}</h2>
                    <div class="card__favorite">
                        <img src="../img/heart.svg" class="card__favorite-btn">
                        <a href="destination.html?id=${destination.id}" class="card__favorite-link">SE MERE</a>
                    </div>
                </figcaption>
            </figure>
        `;
		})
		.join('');
	mainWrapper.insertAdjacentHTML('beforeend', destinationDom);
}
