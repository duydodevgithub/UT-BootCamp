var http = require('http');

var PORT = 8081;

function handleRequest(req,res){
    res.end("YO THIS THING WORKS"+req.url);
    console.log("hello world");


};

var server = http.createServer(handleRequest);

server.listen(PORT);
