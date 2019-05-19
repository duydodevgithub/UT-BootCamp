// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// The follow two lines work with data in the js files
// This data is only persistent until the server is restarted
// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");

var connection = require("../config/connection");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {

    connection.query("SELECT * FROM reservations ORDER BY createdAt LIMIT 0,5", function(err, results){
      res.json(results);
    });

    //res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {

    connection.query("SELECT * FROM reservations ORDER BY createdAt LIMIT 5, 10000000", function(err, results){
      res.json(results);
    });

    //res.json(waitListData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table

    var query = connection.query("INSERT INTO reservations SET ?", req.body, function(error, results, fields){
      if(error) throw error;
      
      // Lets check how many rows are in the table now
      connection.query("SELECT count(*) as tables FROM reservations", function(error, results){
        console.log(results);
        if(results[0].tables < 5){
          res.json(true);
        }else{
          res.json(false);
        }
      });
    });

    // The follow is if you use arrays and json files on the server
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    // If using .json files and objects
    tableData = [];
    waitListData = [];

    // Lets Clear the Table/Wait List

    connection.query("DELETE FROM reservations", function(error, results){
      if(error) throw error;

      console.log('deleted ' + results.affectedRows + ' rows');
    }); // close connection.query

    // console.log(tableData);
  }); // close app.post

}; // function(app)
