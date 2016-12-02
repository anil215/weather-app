const request = require('request');

// get your api key from darksky servers
const key = '';

var getWeather = (latitude,longitude,callback) => {
  const request = require('request');

  request( {
    url : `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
    json: true
  },(error,response,body) => {

    if(!error && response.statusCode === 200){
      callback(undefined,{
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature
      });
    }else{
      callback('Unable to fetch weather');
    }

  });
};

module.exports = {
  getWeather : getWeather
}
