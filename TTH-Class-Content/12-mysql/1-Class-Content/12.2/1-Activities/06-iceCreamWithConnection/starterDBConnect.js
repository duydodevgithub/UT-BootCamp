// include mysql package

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: 'root',

  password: 'rootpassword',

  database: 'ice_creamDB'

});

connection.connect(function(err){
  if(err) throw err;
  console.log("connected as id " + connection.threadId);
});