//handles the mysql connection
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "db4free.net",
  user: "airtel",
  password: "123456789",
  database: "airtel_forum"
});

module.exports = { connection };
