// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "M3lanom@",
    database: "burgers_db"
  });
};
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;

  module.exports = {
    HOST: "us-cdbr-iron-east-02.cleardb.net",
    USER: "b7e2437887xxxa",
    PASSWORD: "0200xxx6",
    DB: "heroku_7643ec736354xxx"
  };