const cityElem = document.getElementById('cityElement');
const mobileMenuCityElem = document.getElementById('mobileMenuCityElement');
const tariffPrice = document.getElementById('tariffPrice');
const tariffPricePromo = document.getElementById('tariffPricePromo');

const geo = navigator.geolocation;
let latitude, longitude, region, city;

geo.getCurrentPosition(result => {
    latitude = result.coords.latitude; 
    longitude = result.coords.longitude;
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    let urlForStreets = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    let token = "f1f5ea1fea06549f4d0285fd6c94634b2f892f20";
    let query = { lat: latitude, lon: longitude };
    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify(query)
    }

    const decodeCoords = async () => {
        let response = await fetch(url, options);
        let result = await response.json();
        region = result.suggestions[0].data.region;
        city = result.suggestions[0].data.city;
        let optionsforStreets = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: `${city} ул`})
        }
        
        cityElem.innerText = city;

        let responseStreet = await fetch(urlForStreets, optionsforStreets);
        let resultStreet = await responseStreet.json();

        resultStreet.suggestions.forEach(element => {
            console.log(element.value);
        })

        switch(region) {
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
    }

    decodeCoords();
});
