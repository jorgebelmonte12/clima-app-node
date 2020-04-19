const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c2e3982de39935487871574b41e108ea&units=metric`);

    const data = resp.data.main.temp;

    return data;

}


module.exports = {
    getClima
}