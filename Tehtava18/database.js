const mysql = require('mysql2');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'test_user',
  password: 'test',
  database: 'test'
});
module.exports = connection;