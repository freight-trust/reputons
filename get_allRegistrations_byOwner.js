var request = require('request');
var options = {
  'method': 'GET',
  'url': 'localhost:3000/erc/balanceOf/?owner={{owner}}',
  'headers': {
    'Accept': 'application/json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
