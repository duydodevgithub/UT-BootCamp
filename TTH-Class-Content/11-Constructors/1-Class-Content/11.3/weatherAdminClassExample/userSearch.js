//var weatherAdmin = require(“./WeatherAdmin.js”);
var weather = require('weather-js');
var fs = require('fs');
// constructor called userSearch and get weather function
// function needs to throw an err and stringify results (null and 2)

var UserSearch = function (name, location) {
    this.name = name;
    this.location = location;

    //user type
    // var userType = process.argv[2];
    // grab current date/time
    this.date = Date.now();
    //log.txt
    fs.appendFile('log.txt', this.name + this.location + this.date,function(err,data){
        if (err) console.log(err);


    } )
    this.getWeather = function() {

        weather.find(

          {search: this.location,
            degreeType: 'F'},

            function(err, result) {
            if(err) console.log(err);
            console.log(JSON.stringify(result, null, 2));
        });
    };
};
function sup(){
  return this+'sup'
}
// UserSearch()
//console.log(UserSearch.sup)
module.exports = UserSearch;
