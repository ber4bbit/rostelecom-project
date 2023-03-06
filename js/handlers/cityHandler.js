const closeModalBtn = document.getElementById('closeModalBtn');
const modalWindowWrapper = document.getElementById('modalCity');
const searchCityInput = document.getElementById('searchCityHandler');
const searchResultWrapper = document.getElementById('searchResult');
const searchResultCity = document.getElementById('searchResultCity');
const citiesHints = document.querySelectorAll('.modal-window__list-item');

cityElem.addEventListener('click', () => modalWindowWrapper.classList.remove('modal-window-wrapper_hidden'));

closeModalBtn.addEventListener('click', () => modalWindowWrapper.classList.add('modal-window-wrapper_hidden'));

searchCityInput.addEventListener('change', (event) => {
    cities.forEach(elem => {
        if (event.target.value == '') searchResultWrapper.classList.add('modal-window__search-result_hidden');
        else if (elem.city == event.target.value) {
            console.log(elem.city, elem.region);
            searchResultWrapper.classList.remove('modal-window__search-result_hidden');
            searchResultCity.innerText = elem.city;
            searchResultCity.setAttribute('data-region', elem.region);
        } else if (!cities.some(item => item.city === event.target.value)) {
            searchResultWrapper.classList.remove('modal-window__search-result_hidden');
            searchResultCity.innerText = 'Город не найден';
            searchResultCity.setAttribute('data-region', 'not-found');
        }
    })
})

searchResultCity.addEventListener('click', () => {
    switch(searchResultCity.getAttribute('data-region')) {
        case 'Оренбургская':
            tariffPrice.innerText = 800;
            tariffPricePromo.innerText = 555;
            break;
        case 'Саратовская':
            tariffPrice.innerText = 650;
            tariffPricePromo.innerText = 444;
            break;
        case 'Ульяновская':
            tariffPrice.innerText = 700;
            tariffPricePromo.innerText = 555;
            break;
        case 'Мордовия':
            tariffPrice.innerText = 700;
            tariffPricePromo.innerText = 555;
            break;
        case 'Пензенская':
            tariffPrice.innerText = 800;
            tariffPricePromo.innerText = 555;
            break;
        case 'Чувашская республика':
            tariffPrice.innerText = 750;
            tariffPricePromo.innerText = 555;
            break;
        case 'Марий эл':
            tariffPrice.innerText = 750;
            tariffPricePromo.innerText = 555;
            break;
        case 'Кировская':
            tariffPrice.innerText = 800;
            tariffPricePromo.innerText = 555;
            break;
        case 'Удмуртская':
            tariffPrice.innerText = 750;
            tariffPricePromo.innerText = 555;
            break;
        case 'Нижегородская':
            tariffPrice.innerText = 700;
            tariffPricePromo.innerText = 499;
            break;
        case 'Самарская':
            tariffPrice.innerText = 750;
            tariffPricePromo.innerText = 555;
            break;
        case 'Татарстан':
            tariffPrice.innerText = 700;
            tariffPricePromo.innerText = 444;
            break;
        case 'not-found':
            break;
    }

    searchCityInput.value = '';
    searchResultWrapper.classList.add('modal-window__search-result_hidden');
    modalWindowWrapper.classList.add('modal-window-wrapper_hidden');
    cityElem.innerText = searchResultCity.innerText;
})

citiesHints.forEach(elem => {
    elem.addEventListener('click', () => {
        switch(elem.getAttribute('data-region')) {
            case 'Оренбургская':
                tariffPrice.innerText = 800;
                tariffPricePromo.innerText = 555;
                break;
            case 'Саратовская':
                tariffPrice.innerText = 650;
                tariffPricePromo.innerText = 444;
                break;
            case 'Ульяновская':
                tariffPrice.innerText = 700;
                tariffPricePromo.innerText = 555;
                break;
            case 'Мордовия':
                tariffPrice.innerText = 700;
                tariffPricePromo.innerText = 555;
                break;
            case 'Пензенская':
                tariffPrice.innerText = 800;
                tariffPricePromo.innerText = 555;
                break;
            case 'Чувашская республика':
                tariffPrice.innerText = 750;
                tariffPricePromo.innerText = 555;
                break;
            case 'Марий эл':
                tariffPrice.innerText = 750;
                tariffPricePromo.innerText = 555;
                break;
            case 'Кировская':
                tariffPrice.innerText = 800;
                tariffPricePromo.innerText = 555;
                break;
            case 'Удмуртская':
                tariffPrice.innerText = 750;
                tariffPricePromo.innerText = 555;
                break;
            case 'Нижегородская':
                tariffPrice.innerText = 700;
                tariffPricePromo.innerText = 499;
                break;
            case 'Самарская':
                tariffPrice.innerText = 750;
                tariffPricePromo.innerText = 555;
                break;
            case 'Татарстан':
                tariffPrice.innerText = 700;
                tariffPricePromo.innerText = 444;
                break;
        }
    })
})