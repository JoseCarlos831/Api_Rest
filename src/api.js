/* eslint-disable import/newline-after-import */
const express = require('express');
const api = express();
// eslint-disable-next-line import/no-useless-path-segments
const routers = require('../src/routes/homeRoutes');

api.use(express.urlencoded({ extended: false }));
api.use(express.json());

// eslint-disable-next-line comma-spacing
api.use('/',routers);

module.exports = api;
