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
                        <svg class="card__favorite-btn" width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1429 32C16.6135 31.9993 16.0966 31.8376 15.6594 31.5358C9.18257 27.09 6.37805 24.0417 4.83115 22.1358C1.53462 18.0733 -0.043588 13.9025 0.00091513 9.38583C0.0528354 4.21 4.15948 0 9.15537 0C12.7881 0 15.3042 2.06917 16.7695 3.7925C16.8159 3.84654 16.8733 3.88988 16.9377 3.91957C17.0021 3.94927 17.0721 3.96464 17.1429 3.96464C17.2136 3.96464 17.2836 3.94927 17.348 3.91957C17.4124 3.88988 17.4698 3.84654 17.5162 3.7925C18.9815 2.0675 21.4976 0 25.1303 0C30.1262 0 34.2329 4.21 34.2848 9.38667C34.3293 13.9042 32.7494 18.075 29.4546 22.1367C27.9077 24.0425 25.1032 27.0908 18.6263 31.5367C18.189 31.8381 17.6721 31.9996 17.1429 32Z" fill="var(--fillColor)"/>
                        </svg>
                        <a href="destination.html?id=${destination.id}" class="card__favorite-link">SE MERE</a>
                    </div>
                </figcaption>
            </figure>
        `;
		})
		.join('');
	mainWrapper.insertAdjacentHTML('beforeend', destinationDom);

	const favoriteCardBtn = document.querySelectorAll('.card__favorite-btn');

	favoriteCardBtn.forEach((icon) => {
		icon.addEventListener('click', changeBtnColor);
	});

	function changeBtnColor(e) {
		e.preventDefault();

		if ((e.target.style.cssText = '--fillColor: #000')) {
			e.target.style.cssText = '--fillColor: red';
		}
	}
}
