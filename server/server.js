const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true,
};

const server = express();
server.use(cors(corsOptions));

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '../public')));

module.exports = function (db) {
  server.set('db', db);
  return server;
};
