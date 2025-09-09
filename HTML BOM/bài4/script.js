const dogList = document.getElementById('dogType');
const fetchBtn = document.getElementById('fetchBtn');
const imgBox = document.getElementById('dogImg');

document.addEventListener('DOMContentLoaded', () => {
    async function fetchAPI(url) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error ('error');
            return await res.json();
        } catch (err) {
            console.error("Fetch API error:", err);
            return null;
        }
    }

    async function renderListDogs() {
        const data = await fetchAPI('https://dog.ceo/api/breeds/list/all');
        if (!data) return;
        const breeds = Object.keys(data.message);
        breeds.forEach((item) => {
            const subBreed = data.message[item];
            if (subBreed.length == 0) {
                createNewOption(item, '');
            }
            else {
                subBreed.forEach(subItem => {
                    createNewOption(item, subItem);
                });
            }
        })
    };

    renderListDogs();

    function createNewOption(item, subItem) {
        const dogSelected = document.createElement('option');
        dogSelected.value = !subItem ? item : `${item}/${subItem}`;
        dogSelected.textContent = !subItem ? item : `${subItem} ${item}`;
        dogList.appendChild(dogSelected);
    };

    async function getImgRandom(breed) {
        const url = breed ? `https://dog.ceo/api/breed/${breed}/images/random` : `https://dog.ceo/api/breeds/image/random`;
        const data = await fetchAPI(url);
        if (!data) return;
        const pathName = breed ? `?breed=${dogList.value}` : `/`;
        imgBox.src = data.message;
        history.pushState({ dogSelected: dogList.value, imgRandom: data.message }, '', pathName);
    };

    getImgRandom("");

    dogList.addEventListener('change', () => {
        getImgRandom(dogList.value);
    });
    fetchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        getImgRandom(dogList.value);
    });

    window.addEventListener('popstate', () => {
        if (history.state) {
            dogList.value = history.state.dogSelected;
            imgBox.src = history.state.imgRandom;
        }
        else {
            dogList.value = '';
        };
    });
});




