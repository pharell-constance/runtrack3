const COMPANY_DATA = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation:"2019"
}

const JSON_COMPANY_DATA = JSON.stringify(data);

function jsonValueKey(json, key) {
    const data = JSON.parse(json);
    if(!data.hasOwnProperty(key)) {
        throw new Error(key + " n'est pas une clé valide");
    }
    return data[key];
}

const value =  jsonValueKey(JSON_COMPANY_DATA, "city")