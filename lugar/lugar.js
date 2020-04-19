const axios = require('axios');




getLugarLatLng = async(direccion) => {


    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': '83647013a7msh17db22fa90f262ap147203jsn630831eb9511' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`Results not found for ${direccion}`);
    }

    const data = resp.data.Results[0];



    return {
        direccion: data.name,
        lat: data.lat,
        lng: data.lon
    }

}


module.exports = {
    getLugarLatLng
}