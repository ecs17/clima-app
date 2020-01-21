const axios = require('axios');

const getLatLong = async (dir) =>{
    const encoderURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        headers: {'x-rapidapi-key': '6b1a1cd74amshf22dee7371ba8cdp148ad0jsnf2ccc38b9967'}
    });

    const res = await instance.get();
    if (res.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }
     
    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}


module.exports = {
    getLatLong
}