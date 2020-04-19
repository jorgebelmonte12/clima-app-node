const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {

        clima.getClima(resp.lat, resp.lng)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            })

    })
    .catch(err => {
        console.log(err);
    }) 

*/

const getInfo = async(direccion) => {

    try {
        const sitio = await lugar.getLugarLatLng(direccion);

        const temperatura = await clima.getClima(sitio.lat, sitio.lng);

        return `El clima de ${sitio.direccion} es de ${temperatura}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion} ${e} `;
    }


}


getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => console.log(err))








//console.log(argv.direccion);