const cityElem = document.getElementById('cityElement');
const mobileMenuCityElem = document.getElementById('mobileMenuCityElement');

const geo = navigator.geolocation;
let latitude, longitude;

geo.getCurrentPosition(result => {
    latitude = result.coords.latitude; 
    longitude = result.coords.longitude;
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    let token = "f1f5ea1fea06549f4d0285fd6c94634b2f892f20";
    let query = { lat: 55.7522, lon: 37.6156 };

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

    fetch(url, options)
    .then(response => response.json())
    .then(result => 
        cityElem.innerText = result.suggestions[0].data.city,
        )
    .catch(error => console.log("error", error));
});
