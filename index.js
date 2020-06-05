const https = require("https");
const  fs = require("fs");

  var options = {
  key: process.env.KEY,
  cert: process.env.CERT ,
  passPhrase: process.env.PASSPHRASE
  }

const serverOptions =  {
  key: fs.readFileSync(options.key),
  cert: fs.readFileSync(options.cert),
  passPhrase: fs.readFileSync(options.passPhrase)
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world from Indrani\n");
});

app.listen(8080);

https.createServer(serverOptions, app).listen(8080);