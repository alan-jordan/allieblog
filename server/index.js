const createServer = require('./server');

const env = process.env.NODE_ENV || 'development';
const knex = require('knex');
const config = require('../knexfile')[env];

const server = createServer(knex(config));
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
