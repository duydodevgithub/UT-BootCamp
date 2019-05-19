var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootpassword",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  selectAll();

  // connection.end();
}); // Close connect

/**
 *  Select all from my database 
 */
function selectAll() {
  connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;

    console.log(res[0].id);
  }); // Close connection.query
}

function createProduct(){
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      flavor: "Salted Caramel",
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      updateProduct();
    }
  );

  console.log(query.sql);
} // closes create Product


function updateProduct(){
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Salted Caramel"
      }
    ],
    function(err, res){
      console.log(res.affectedRows + "products updated\n");
    }
  );
  deleteProduct();
}// closes function


function deleteProduct(){
  var query = connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    }, 
    function(err, res){
      console.log(res.affectedRows);
    }
  );
}


function readProducts(){
  
}