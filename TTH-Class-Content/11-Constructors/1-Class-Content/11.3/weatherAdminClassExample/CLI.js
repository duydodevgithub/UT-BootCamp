var weatherAdmin = require("./weatherAdmin.js");
var UserSearch = require("./userSearch.js");


var userType = process.argv[2];  //user or admin ?

var userName = process.argv[3];
var location = process.argv[4];

if (userType === 'user'){
    //console.log(userSearch);
    UserSearch(userName,location);

}

//if process.argv[2] == admin

if(userType === "admin") {


    //call function to display data in weatherAdmin.js
    weatherAdmin.getData();
    //var newAdmin = new weatherAdmin();
    //newAdmin.getData()
    //console.log(newAdmin);
}
