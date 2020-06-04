const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/apps/certs/key.pem"),
  cert: fs.readFileSync("/apps/cert/cert.pem")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world from Indrani\n");
});

app.listen(8080);

https.createServer(options, app).listen(8080);