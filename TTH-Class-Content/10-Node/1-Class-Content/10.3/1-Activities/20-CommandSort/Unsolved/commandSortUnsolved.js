// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use StackOverflow or Google to find the "sort" method.
// ===========================================================================================

//get paramaters from command line
var args = process.argv;

//node sort.js 2 4 5 6 7
//grab all the numbers
// for (var i=2; args.length; i++){
//
//
//
// }
//removes the junk from the args array
args.splice(0,2);

var integers = args.map(function(number){
  return parseInt(number)


});


integers.sort();
console.log(integers);
