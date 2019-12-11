
const keys = require('./keys')
const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  keys.mysqlUser, // username
  password :  keys.mysqlPass,
  database :  'movies',
});
module.exports = connection;