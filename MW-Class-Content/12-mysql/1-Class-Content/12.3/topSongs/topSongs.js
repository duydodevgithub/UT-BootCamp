var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "top_songsDB"


});

connection.connect(function(err){
    if (err) throw err;
    artistSearch();
})

function runSearch(){
    connection.query('SELECT * FROM top5000 WHERE song= "My Heart Will Go On"',function(err,response){
        console.log(response);


    })



}

function multiSearch(){
  connection.query('SELECT artist FROM top5000 GROUP  BY artist HAVING COUNT(*) > 12',function(err,response){
      console.log(response);


  })



}

function rangeSearch(){
  connection.query('SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?',[234,432],function(err,response){
      console.log(response);


  })
};

function artistSearch(){
  connection.query('SELECT * FROM top5000 WHERE artist = "Michael Jackson"',function(err,response){
      console.log(response);


  })
}
