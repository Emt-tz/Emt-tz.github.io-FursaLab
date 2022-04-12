//handles the mysql connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'airtel_forum'
});
 
module.exports = {connection};
