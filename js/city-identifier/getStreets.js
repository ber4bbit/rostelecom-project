const searchStreetInput = document.getElementById('searchStreetInput');
const streetsList = document.getElementById('streetList');

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
let token = "f1f5ea1fea06549f4d0285fd6c94634b2f892f20";
let query = "Новосибирск волховская д33";

let streetElem;

let options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: city})
}

// Данная функция отслеживает изменения в поле ввода адреса и заносит результаты в ul
const findStreets = async () => {
    while (streetsList.firstChild) {
        streetsList.removeChild(streetsList.firstChild);
    }
    let response = await fetch(url, options);
    let result = await response.json();
    result.suggestions.forEach(element => {
        streetElem = document.createElement('li');
        streetElem.className = 'streets-street';
        streetElem.innerText = element.value;
        streetsList.append(streetElem);
        streetElem.addEventListener('click', event => {
            searchStreetInput.value = event.target.innerText;
            streetsList.classList.add('modal-window-wrapper_hidden');
            while (streetsList.firstChild) {
                streetsList.removeChild(streetsList.firstChild);
            }
        })
    })
}

// Это обработчик, который отслеживает изменения в поле вводы адреса 
searchStreetInput.addEventListener('input', (event) => {
    if (event.target.value === '') streetsList.classList.add('modal-window-wrapper_hidden');
    else if (event.target.value !== '') streetsList.classList.remove('modal-window-wrapper_hidden');
    setTimeout(() => {
        options.body = JSON.stringify({query: `${document.getElementById('cityElement').innerText} ${event.target.value}`});
        findStreets();
    }, 1000);
})

