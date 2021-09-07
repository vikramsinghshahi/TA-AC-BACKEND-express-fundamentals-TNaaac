var express = require('express');

var app = express();

app.use('/admin', (req, res, next) => {
  next('unauthorsied attempt');
});

app.get('/', (req, res) => {
  res.send('welcome');
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.use((req, res, next) => {
  res.send('page not found');
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
