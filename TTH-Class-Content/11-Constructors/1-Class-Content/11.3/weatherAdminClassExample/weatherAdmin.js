var fs = require('fs');
var UserSearch = require("./userSearch.js");
//console.log('admin loaded');
var WeatherAdmin = function () {
  this.major = 'petro engineering'
  this.newUserSearch = function(name, location) {

    var newUserSearch = new UserSearch(name, location);
    var logTxt = " Name: " + newUserSearch.name + " Location: " + newUserSearch.location +
                 " Date: " + newUserSearch.date;

    fs.appendFile("log.txt", logTxt);

    //newUserSearch.getWeather();

  };

  this.getData = function() {
		fs.readFile("log.txt", "utf8", function(error, data){
			console.log(data);
			console.log(error);

		});
	};

};


module.exports = WeatherAdmin;
