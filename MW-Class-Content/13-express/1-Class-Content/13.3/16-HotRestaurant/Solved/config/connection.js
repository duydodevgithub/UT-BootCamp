var mysql = require("mysql");


var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + "/config.json")[env];

console.log(config);

if(config.use_env_variable){
  var connection = mysql.createConnection(process.env[config.use_env_variable]);
}else{
  var connection = mysql.createConnection(config);
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;