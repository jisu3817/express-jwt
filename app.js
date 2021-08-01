"use strict";
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const indexRouter = require('./src/routes/home/index');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
