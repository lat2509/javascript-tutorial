const doglist = document.getElementById('dogType');
const fetchBtn = document.getElementById('fetchBtn');
const imgBox = document.getElementById('dogImg');
document.addEventListener('DOMContentLoaded', () => {
    async function listDogs() {
        try {
            const listDog = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await listDog.json();

            const breeds = Object.keys(data.message);
            breeds.forEach((item) => {
                if (data.message[item].length == 0) {
                    const dogSelected = document.createElement('option');
                    dogSelected.value = item;
                    dogSelected.textContent = item;
                    doglist.appendChild(dogSelected);
                }
                else {
                    data.message[item].forEach(subItem => {
                        const dogSelected = document.createElement('option');
                        dogSelected.value = `${item}/${subItem}`;
                        dogSelected.textContent = `${subItem} ${item}`;
                        doglist.appendChild(dogSelected);
                    })
                }

            })

        } catch {
            console.log('khong tim thay thong tin');
        }
    };

    listDogs();

    getImgRandom("");

    async function getImgRandom(breed) {
        if (breed !== '') {
            const imgRandom = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            const data = await imgRandom.json();
            imgBox.src = data.message;
            history.pushState({ dogSelected: doglist.value, imgRandom: data.message }, '', `?breed=${doglist.value}`);
        }
        else {
            const imgRandom = await fetch(`https://dog.ceo/api/breeds/image/random`);
            const data = await imgRandom.json();
            imgBox.src = data.message;
            history.pushState({ dogSelected: doglist.value, imgRandom: data.message }, '', `/`);
        }

    };

    doglist.addEventListener('change', () => {
        getImgRandom(doglist.value);
    });
    fetchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        getImgRandom(doglist.value);
    });

    window.addEventListener('popstate', () => {
        if (history.state) {
            doglist.value = history.state.dogSelected;
            imgBox.src = history.state.imgRandom;
        }
        else {
            doglist.value = '';
        };
    });
});




