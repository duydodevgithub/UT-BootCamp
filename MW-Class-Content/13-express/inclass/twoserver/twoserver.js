//credit - David (capt. Salt)

var http = require("http");

var port1 = 7000;
var port2 = 7500;

function youSuck(req,res) {
    res.end("You suck LMAOOO");
}

function youCool(req,res) {
    res.end("Wow, ur so cool");
}

var suckServer = http.createServer(youSuck);
var coolServer = http.createServer(youCool);

suckServer.listen(port1,function(){
  console.log('server 1 ran');
});
coolServer.listen(port2,function(){
  console.log('server 2 ran')

});
