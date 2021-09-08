var express = require('express');

var app = express();

app.use(express.json());

var logger = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.send('welcome');
});

app.post('/json', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('server is listening at 3K');
});
