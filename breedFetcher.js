const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, code, body) => {
    if (error) throw error;
    const data = JSON.parse(body);
    if (data[0] === undefined || code.statusCode !== 200) {
      callback(`Breed ${breed} was not found in thecatAPI`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };