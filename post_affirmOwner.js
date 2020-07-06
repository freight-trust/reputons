// affirm and/or reaffirm the address of the contract and/or owner

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'localhost:3000/erc/approve/?approved={{approved}}&tokenId={{tokenId}}',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"auth":{"sig":"{{sig}}"}})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
