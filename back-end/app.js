const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const connect = require('./database/connection');
const mapsController = require('./controllers/mapController');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connect()

app.post('/maps/add', mapsController.submitMap);

module.exports = app;
