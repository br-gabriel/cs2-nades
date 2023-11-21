const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const connect = require('./database/connection');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connect()

module.exports = app;
