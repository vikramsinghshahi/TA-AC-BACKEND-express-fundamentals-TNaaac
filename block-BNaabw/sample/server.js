//require
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

//install the app
var app = express();

//middleware

app.use(logger('dev'));

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public/'));

//routes

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  res.send('this is about page');
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});

//error handle

app.use((req, res, next) => {
  res.send('page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

//listner
app.listen(4000, () => {
  console.log('server is listening at 3k');
});
