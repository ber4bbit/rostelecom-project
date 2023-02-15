var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "f1f5ea1fea06549f4d0285fd6c94634b2f892f20";
var query = "Новосибирск волховская д33";


// console.log(cityForQuery);
// let query = ``;

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
}

const findStreets = async () => {
    let response = await fetch(url, options);
    let result = await response.json();
    result.suggestions.forEach(element => {
        console.log(element.value);
    })
}

// findStreets();