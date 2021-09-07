var express = require('express');

var app = express();

var logger = require('morgan');

var cookieParser = require('cookie-parser');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie('username', 'vikram');
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to express');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(`<h2>${username}</h2>`);
});

app.post('/form', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post('/json', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

//404 middel wear

app.use((req, res, next) => {
  res.send('page not found');
});

// client server error
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
