log(name); // output: undefined
log(tish); // Reference error

var tinyize = function(name) {
  // myName exists here
  log(name); // output: Rick -> argument passed in the function

  log(myName); // output: undefined
  var myName = "Tiny " + name + "!";
  log(myName); // output: Tiny Rick!

  var insideFunction = function(){
    log(myName); // output: Tiny Rick!
    var studentName = "Grant";
  }

  log(studentName); // reference error
  return myName;
};

var name = tinyize("Rick");
log(name); // output: Tiny Rick!
log(myName); // output: Reference Error - BECAUSE SCOPING 

log(i); // output: undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: '5' 5 times
  }, 100);
}
log(i); // output: 5

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}


// ES6 Helps with this confusion
(function(){
  var p = "This is local scope";
})();