const https = require("https"),
  fs = require("fs");

  key = process.env.KEY
  cert = process.env.CERT 

const options = {
  key: fs.readFileSync(key),
  cert: fs.readFileSync(cert)
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world from Indrani\n");
});

app.listen(8080);

https.createServer(options, app).listen(8080);