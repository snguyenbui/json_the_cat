const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, code, body) => {
  console.log("error:", error);
  console.log("code:", code && code.statusCode);
  console.log("body", typeof body)
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

})