var express = require('express');

var app = express();

app.use('/', (req, res, next) => {
  res.send('error 404');
  next(err);
});

app.use('/about', (req, res) => {
  res.send('error 404');
  next(err);
});
app.get('/', (req, res) => {
  res.send('welcome');
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.use((err, req, res, next) => {
  res.send(err);
  next();
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
