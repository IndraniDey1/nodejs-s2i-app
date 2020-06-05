
var express = require('express')
const https = require("https");
const  fs = require("fs");


  var options = {
  key: process.env.KEY,
  cert: process.env.CERT ,
  passPhrase: process.env.PASSPHRASE
  }

const serverOptions =  {
  key: fs.readFileSync(options.key),
  cert: fs.readFileSync(options.cert) 
};

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// app is running!
app.get('/', function(req, res) {
    res.send('Hello from NodeJS on behalf of Indrani Dey at '+ new Date());
});

https.createServer(serverOptions, app).listen(8080,ip);