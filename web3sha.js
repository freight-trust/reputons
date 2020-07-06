var unirest = require('unirest');
var req = unirest('POST', 'http://18.216.213.235:8545')
  .headers({
    'Content-Type': 'application/json'
  })
  .send(JSON.stringify({"jsonrpc":"2.0","method":"web3_sha3","params":["0x68656c6c6f20776f726c00"],"id":1}))
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
