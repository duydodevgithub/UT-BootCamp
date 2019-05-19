var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
	if (error) {
		return console.log(error);
	}
	// console.log(data);
	var org = data.split(',');
	// console.log(org);
	for (i in org) {
		console.log(org[i]);
	}
})