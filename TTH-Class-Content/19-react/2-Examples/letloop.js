//log(i); // output: 'undefined'
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: '5' 5 times
  }, 100);
}
//log(i);


function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
