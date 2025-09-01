const mainContainer = document.querySelector('#container');

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
                <figcaption class="card__text">
                    <h2 class="card__title">${destination.title}</h2>
                    <img src="../img/heart.svg" class="card__heart-icon">
                    <a href="destination.html?id=${destination.id}" class="card__link">SE MERE</a>
                </figcaption>
            </figure>
        `;
		})
		.join('');
	mainContainer.insertAdjacentHTML('beforeend', destinationDom);
}
