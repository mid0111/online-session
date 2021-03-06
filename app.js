const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const i18n = require('i18n');

// i18n
i18n.configure({
  locales: ['ja'],
  directory: `${__dirname}/locales`,
  objectNotation: true,
});

const routes = require('./routes/');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  /* eslint-enable */

  const response = {
    error: {
      message: err.message,
    },
  };

  if (app.get('env') === 'development') {
    // development error handler will print stacktrace
    response.error.detail = err;
  }

  res.status(err.status || 500);
  res.json(response);
});

module.exports = app;
