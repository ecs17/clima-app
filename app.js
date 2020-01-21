const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (dir) =>{
    try {  
        const cor = await lugar.getLatLong(argv.direccion).then();
        const temp = await clima.getClima(cor.lat, cor.lon).then();
        return `La temperatura de ${dir} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`;
    }
} 

getInfo(argv.direccion).then(console.log).catch(console.log);