var express = require('express');

var app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to express');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post('/json', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
