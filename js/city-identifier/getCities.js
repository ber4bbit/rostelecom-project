const citiesList = document.getElementById('citiesList');
const searchCityInput = document.getElementById('searchCityInput');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalWindowWrapper = document.getElementById('modalCity');

let cityElemResult;

const findCities = async () => {
    while (citiesList.firstChild) citiesList.removeChild(citiesList.firstChild);
    let response = await fetch(url, options);
    let result = await response.json();
    result.suggestions.forEach(element => {
        cityElemResult = document.createElement('li');
        cityElemResult.className = 'streets-street';
    if (element.data.city != null) {
        cityElemResult.innerText = `${element.data.city}`;
        citiesList.append(cityElemResult);
        cityElemResult.addEventListener('click', event => {
            cityElem.innerText = event.target.innerText;
            mobileMenuCityElem.innerText = event.target.innerText;
            searchCityInput.value = event.target.innerText;
            citiesList.classList.add('modal-window-wrapper_hidden');
            switch(element.data.region) {
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
            modalWindowWrapper.classList.add('modal-window-wrapper_hidden')
        })
        }  
    })
};

cityElem.addEventListener('click', () => modalWindowWrapper.classList.remove('modal-window-wrapper_hidden'));

mobileMenuCityElem.addEventListener('click', () => modalWindowWrapper.classList.remove('modal-window-wrapper_hidden'));

closeModalBtn.addEventListener('click', () => modalWindowWrapper.classList.add('modal-window-wrapper_hidden'));

window.addEventListener('click', event => {
    const target = event.target;
    
    if (!target.closest('.modal-wrapper') && !target.closest('#cityElement') && !target.closest('#mobileMenuCityElement') ) {
        modalWindowWrapper.classList.add('modal-window-wrapper_hidden')
    }
})

searchCityInput.addEventListener('input', (event) => {
    if (event.target.value === '') citiesList.classList.add('modal-window-wrapper_hidden');
    else if (event.target.value !== '') citiesList.classList.remove('modal-window-wrapper_hidden');
    setTimeout(() => {
        options.body = JSON.stringify({query: `${event.target.value}`});
        findCities();
    }, 1000);
});