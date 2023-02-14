const closeModalBtn = document.getElementById('closeModalBtn');
const modalWindowWrapper = document.getElementById('modalCity');
const searchCityInput = document.getElementById('searchCityHandler');
const searchResultWrapper = document.getElementById('searchResult');
const searchResultCity = document.getElementById('searchResultCity');
const citiesHints = document.querySelectorAll('.modal-window__list-item');

const cities = [
    {city: 'Саратов', region: 'Саратовская'},
    {city: 'Вольск', region: 'Саратовская'},
    {city: 'Балаково', region: 'Саратовская'},
    {city: 'Энгельс', region: 'Саратовская'},
    {city: 'Маркс', region: 'Саратовская'},
    {city: 'Шиханы-4', region: 'Саратовская'},
    {city: 'Ершов', region: 'Саратовская'},
    {city: 'Аркадак', region: 'Саратовская'},
    {city: 'Калининск', region: 'Саратовская'},
    {city: 'Красноармейск', region: 'Саратовская'},
    {city: 'Пугачев', region: 'Саратовская'},
    {city: 'Самара', region: 'Самарская'},
    {city: 'Тольятти', region: 'Самарская'},
    {city: 'Сызрань', region: 'Самарская'},
    {city: 'Октябрьск', region: 'Самарская'},
    {city: 'Похвистнево', region: 'Самарская'},
    {city: 'Новокуйбышевск', region: 'Самарская'},
    {city: 'Кинель', region: 'Самарская'},
    {city: 'Отрадный', region: 'Самарская'},
    {city: 'Чапаевск', region: 'Самарская'},
    {city: 'Волжский', region: 'Самарская'},
    {city: 'Жигулевск', region: 'Самарская'},
    {city: 'Казань', region: 'Татарстан'},
    {city: 'Альметьевск', region: 'Татарстан'},
    {city: 'Чистополь', region: 'Татарстан'},
    {city: 'Нижнекамск', region: 'Татарстан'},
    {city: 'Набережные Челны', region: 'Татарстан'},
    {city: 'Бугульма', region: 'Татарстан'},
    {city: 'Зеленодольск', region: 'Татарстан'},
    {city: 'Абдулино', region: 'Оренбургская'},
    {city: 'Бугуруслан', region: 'Оренбургская'},
    {city: 'Бузулук', region: 'Оренбургская'},
    {city: 'Гай', region: 'Оренбургская'},
    {city: 'Кувандык', region: 'Оренбургская'},
    {city: 'Медногорск', region: 'Оренбургская'},
    {city: 'Новотроицк', region: 'Оренбургская'},
    {city: 'Оренбург', region: 'Оренбургская'},
    {city: 'Медногорск', region: 'Оренбургская'},
    {city: 'Орск', region: 'Оренбургская'},
    {city: 'Сорочинск', region: 'Оренбургская'},
    {city: 'Барыш', region: 'Ульяновская'},
    {city: 'Димитровград', region: 'Ульяновская'},
    {city: 'Инза', region: 'Ульяновская'},
    {city: 'Новоульяновск', region: 'Ульяновская'},
    {city: 'Сенгилей', region: 'Ульяновская'},
    {city: 'Ульяновск', region: 'Ульяновская'},
    {city: 'Саранск', region: 'Мордовия'},
    {city: 'Ардатов', region: 'Мордовия'},
    {city: 'Инсар', region: 'Мордовия'},
    {city: 'Ковылкино', region: 'Мордовия'},
    {city: 'Краснослободск', region: 'Мордовия'},
    {city: 'Рузаевка', region: 'Мордовия'},
    {city: 'Темников', region: 'Мордовия'},
    {city: 'Пенза', region: 'Пензенская'},
    {city: 'Кузнецк', region: 'Пензенская'},
    {city: 'Заречный', region: 'Пензенская'},
    {city: 'Каменка', region: 'Пензенская'},
    {city: 'Сердобск', region: 'Пензенская'},
    {city: 'Никольск', region: 'Пензенская'},
    {city: 'Чебоксары', region: 'Чувашская республика'},
    {city: 'Новочебоксарск', region: 'Чувашская республика'},
    {city: 'Канаш', region: 'Чувашская республика'},
    {city: 'Чебоксары', region: 'Чувашская республика'},
    {city: 'Алатырь', region: 'Чувашская республика'},
    {city: 'Козловка', region: 'Чувашская республика'},
    {city: 'Йошкар-Ола', region: 'Марий эл'},
    {city: 'Козьмодемьянск', region: 'Марий эл'},
    {city: 'Звенигово', region: 'Марий эл'},
    {city: 'Волжск', region: 'Марий эл'},
    {city: 'Киров', region: 'Кировская'},
    {city: 'Кирово-Чепецк', region: 'Кировская'},
    {city: 'Вятские Поляны', region: 'Кировская'},
    {city: 'Котельнич', region: 'Кировская'},
    {city: 'Омутнинск', region: 'Кировская'},
    {city: 'Ижевск', region: 'Удмуртская'},
    {city: 'Глазов', region: 'Удмуртская'},
    {city: 'Камбарка', region: 'Удмуртская'},
    {city: 'Сарапул', region: 'Удмуртская'},
    {city: 'Можга', region: 'Удмуртская'},
    {city: 'Нижний Новгород', region: 'Нижегородская'},
    {city: 'Арзамас', region: 'Нижегородская'},
    {city: 'Павлово', region: 'Нижегородская'},
    {city: 'Дзержинск', region: 'Нижегородская'},
    {city: 'Горбатов', region: 'Нижегородская'},
    {city: 'Саров', region: 'Нижегородская'},
]

cityElem.addEventListener('click', () => modalWindowWrapper.classList.remove('modal-window-wrapper_hidden'))

closeModalBtn.addEventListener('click', () => modalWindowWrapper.classList.add('modal-window-wrapper_hidden'))

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