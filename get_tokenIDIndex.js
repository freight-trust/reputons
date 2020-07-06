var request = require('request');
var options = {
  'method': 'GET',
  'url': 'localhost:3000/nft/tokenByIndex/?index={{index}}',
  'headers': {
    'Accept': 'application/json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
