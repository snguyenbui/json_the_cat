const request = require('request');
const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, code, body) => {
  // console.log("error:", error);
  if (error) throw error;
  // console.log("code:", code && code.statusCode);
  // console.log("body", typeof body)
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data[0] === undefined || code.statusCode !== 200) {
    console.log(`Breed ${breed} was not found in thecatAPI`);
  } else {
    console.log(data[0].description);
  }
});