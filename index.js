const https = require("https"),
  fs = require("fs");

  var key = process.env.KEY
  var cert = process.env.CERT 
  var passPhrase = PASSPHRASE

const options = {
  key: fs.readFileSync(key),
  cert: fs.readFileSync(cert),
  passPhrase: fs.readFileSync(passPhrase)
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world from Indrani\n");
});

app.listen(8080);

https.createServer(options, app).listen(8080);