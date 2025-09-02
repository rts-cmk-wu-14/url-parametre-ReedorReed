//Local storage
function createLocalStorage(hearts, localStorageName, isFrontpage) {
	const localStorage = getLocalItem(localStorageName);
	if (localStorage.length === 0) {
		const myFavorites = createMyFavorites(hearts);
		setLocalItem(localStorageName, myFavorites);
    }
    else if (localStorage.length === 1 && isFrontpage) {
		const myFavorites = createMyFavorites(hearts);
		myFavorites.forEach((heart) => {
			if (heart.id == localStorage[0].id) {
				heart.active = localStorage[0].active;
			}
		});
		setLocalItem(localStorageName, myFavorites);
	}
}

function createMyFavorites(hearts) {
	const myFavorites = [];
	hearts.forEach((heart) => {
		const heartId = Number(heart.dataset.id);
		const heartObj = { id: heartId, active: false };
		myFavorites.push(heartObj);
	});
	console.log(myFavorites);
	return myFavorites;
}

function handleHeart(hearts) {
	hearts.forEach((heart) => {
		heart.addEventListener('click', handleHeartClick);
	});
}

function handleHeartClick(e) {
	const key = 'myFavorites';
	const target = e.currentTarget;
    const id = parseInt(target.dataset.id);
    
	const myFavorite = getLocalItem(key);
	myFavorite[id - 1].active
		? (myFavorite[id - 1].active = false)
		: (myFavorite[id - 1].active = true);
	setLocalItem(key, myFavorite);
	updateHeartDom(key);
}

function updateHeartDom(key) {
	const heartLocalStorage = getLocalItem(key);
    //console.log(heartLocalStorage);



    heartLocalStorage.forEach((elm) => {
        
		const heartDom = document.querySelector(`[data-id="${elm.id}"]`);
		if (!heartDom) {
			return;
		}

		elm.active
			? heartDom.classList.add('active')
			: heartDom.classList.remove('active');
	});
}
