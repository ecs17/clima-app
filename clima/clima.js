const axios = require('axios');

const getClima = async (lat, lon) =>{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=db565cc3163fd4f13dac61d9f722bc1a&units=metric`)
    return res.data.main.temp
}

module.exports = {
    getClima
}