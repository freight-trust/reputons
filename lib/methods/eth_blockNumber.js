var unirest = require('unirest');
var req = unirest('POST', 'http://127.0.0.1:8545')
  .headers({
    'Content-Type': 'application/json'
  })
  .send(JSON.stringify({"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });